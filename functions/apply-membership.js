const { query: q } = require('faunadb')
const faunadb = require('./lib/faunadb')
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

    const { data: member } = await faunadb.query(
      q.If(
        q.Exists(q.Match(q.Index('unique_members_by_email'), email)),
        q.Get(q.Match(q.Index('unique_members_by_email'), email)),
        q.Create(q.Collection('members'), {
          data: {
            id: Math.floor(100000 + Math.random() * 900000),
            plan,
            price,
            name,
            email,
            phone,
            updated_at: Date.now(),
            created_at: Date.now(),
          },
        })
      )
    )
    console.log(member)

    await Promise.all([
      mailer.sendMail({
        from: `"ANSS Foundation" <admin@anss.ca>`,
        to: 'info@anss.ca',
        replyTo: member.email,
        subject: `New Membership Application - ${member.email}`,
        text: `
        Plan: ${member.plan}
        Price: ${member.price}
        Name: ${member.name}
        Email: ${member.email}
        Phone: ${member.phone}    
      `,
      }),
      mailer.sendMail({
        from: `"ANSS Foundation" <admin@anss.ca>`,
        to: member.email,
        replyTo: 'info@anss.ca',
        subject: `ANSS Foundation: Membership`,
        text: `
        Your application has been received successfully.

        Find your membership details below.
                
        Member ID: ${member.id}
                
        Please keep your member ID safe. This will act as your PIN to protect membership content.

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
