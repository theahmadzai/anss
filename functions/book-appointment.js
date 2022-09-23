const { query: q } = require('faunadb')
const parser = require('lambda-multipart-parser')
const mailer = require('./lib/mailer')
const faunadb = require('./lib/faunadb')

exports.handler = async event => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 410,
      body: JSON.stringify({ message: 'Unsupported Request Method' }),
    }
  }

  try {
    const { name, email, phone, date, category, message, attachments } =
      await parser.parse(event)

    if (!name || !email || !date || !category || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid input' }),
      }
    }

    await mailer.sendMail({
      from: `"ANSS Foundation" <admin@anss.ca>`,
      to: 'info@anss.ca',
      replyTo: email,
      subject: `Appointment booked by ${name}`,
      text: `
        Name: ${name}\n
        Email: ${email}\n
        Phone: ${phone}\n
        Date: ${new Date(date).toDateString()}\n
        Category: ${category}\n
        Message: ${message}
      `,
      attachments,
    })

    await faunadb.query(
      q.Create(q.Collection('appointments'), {
        data: {
          name,
          email,
          phone,
          date,
          category,
          message,
        },
      })
    )

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Appointment booked.' }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.toString() }),
    }
  }
}
