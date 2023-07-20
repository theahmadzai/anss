const mailer = require('./lib/mailer')

exports.handler = async ({ httpMethod, body }) => {
  if (httpMethod !== 'POST') {
    return {
      statusCode: 410,
      body: JSON.stringify({ message: 'Unsupported Request Method' }),
    }
  }

  try {
    const { plan, price, name, email, phone } = JSON.parse(body)

    if (!plan || !price || !name || !email || !phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid input' }),
      }
    }

    await Promise.all([
      mailer.sendMail({
        from: `"ANSS Foundation" <admin@anss.ca>`,
        to: 'info@anss.ca',
        replyTo: email,
        subject: `New Membership Application - ${email}`,
        text: `
        Plan: ${plan}
        Price: ${price}
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
      `,
      }),
      mailer.sendMail({
        from: `"ANSS Foundation" <info@anss.ca>`,
        to: email,
        replyTo: 'info@anss.ca',
        subject: `ANSS Foundation: Membership`,
        text: `
        Dear ${name},

        Your application has been received successfully.

        Regards,
        ANSS Foundation
      `,
      }),
    ])

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Application submitted.' }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.toString() }),
    }
  }
}
