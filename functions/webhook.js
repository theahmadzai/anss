const { query: q } = require('faunadb')
const stripe = require('./lib/stripe')
const faunadb = require('./lib/faunadb')
const mailer = require('./lib/mailer')

/**
 * @param {import('stripe').default.Checkout.Session} session
 */
const handleCheckoutComplete = async session => {
  console.info('Incomming event', session.id)

  const { data: member } = await faunadb.query(
    q.If(
      q.Exists(q.Match(q.Index('unique_members_by_session_id'), session.id)),
      q.Get(q.Match(q.Index('unique_members_by_session_id'), session.id)),
      q.Create(q.Collection('members'), {
        data: {
          id: Math.floor(100000 + Math.random() * 900000),
          session_id: session.id,
          customer_id: session.customer,
          subscription_id: session.subscription,
          livemode: session.livemode,
          plan_price: session.amount_total,
          email: session.customer_email ?? 'info@anss.ca',
          updated_at: Date.now(),
          created_at: Date.now(),
        },
      })
    )
  )

  try {
    await mailer.sendMail({
      from: `"ANSS Foundation" <admin@anss.ca>`,
      to: member.email,
      replyTo: member.email,
      subject: `ANSS Foundation: Membership status update`,
      text: `
      Please find your membership details below:-

      Member ID: ${member.id}

      Please keep your member id safe this will act as your pin to protected membership content.
      
      Regards,
      ANSS Foundation
    `,
    })
  } catch (error) {
    console.info('Could not send email to', member.email)
  }
}

exports.handler = async ({ body, headers }) => {
  let event = null

  try {
    event = stripe.webhooks.constructEvent(
      body,
      headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: error.toString() }),
    }
  }

  if (event.type === 'checkout.session.completed') {
    await handleCheckoutComplete(event.data.object)
  }

  return {
    statusCode: 200,
    body: 'ok',
  }
}
