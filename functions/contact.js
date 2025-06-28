const { connectToDatabase } = require('./lib/mongodb')
const mailer = require('./lib/mailer')

exports.handler = async ({ httpMethod, body }) => {
  if (httpMethod !== 'POST') {
    return {
      statusCode: 410,
      body: JSON.stringify({ message: 'Unsupported Request Method' }),
    }
  }

  try {
    const { name, email, message } = JSON.parse(body)

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid input' }),
      }
    }

    await mailer.sendMail({
      from: `"ANSS Foundation" <admin@anss.ca>`,
      to: 'info@anss.ca',
      replyTo: email,
      subject: `Contact form submitted by ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })

    const { db } = await connectToDatabase();
    await db.collection('Contacts').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent.' }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.toString() }),
    }
  }
}
