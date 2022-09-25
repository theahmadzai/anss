const { query: q } = require('faunadb')
const mailer = require('./lib/mailer')
const faunadb = require('./lib/faunadb')

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
        Name: ${name}\n
        Email: ${email}\n
        Message: ${message}
      `,
    })

    await faunadb.query(
      q.Create(q.Collection('contacts'), {
        data: {
          name,
          email,
          message,
        },
      })
    )

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
