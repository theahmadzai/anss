const { connectToDatabase } = require('./lib/mongodb')
const parser = require('lambda-multipart-parser')
const mailer = require('./lib/mailer')

exports.handler = async event => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 410,
      body: JSON.stringify({ message: 'Unsupported Request Method' }),
    }
  }

  try {
    const { name, email, phone, date, category, message, files } = await parser.parse(event)

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
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Nil'}
        Date: ${new Date(date).toDateString()}
        Category: ${category}
        Message: ${message}
      `,
      attachments: files,
    })

    const { db } = await connectToDatabase();
    await db.collection('Appointments').insertOne({
      name,
      email,
      phone,
      date,
      category,
      message,
      createdAt: new Date(),
    })

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