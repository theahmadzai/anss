const { query: q } = require('faunadb')
const stripe = require('./lib/stripe')
const faunadb = require('./lib/faunadb')
const mailer = require('./lib/mailer')

/**
 * @param {import('stripe').default.Checkout.Session} session
 */
const handleCheckoutComplete = async session => {
  console.time('start')
  console.info('Incomming event: ', session.id)

  const now = Date.now()

  const memberPayload = {
    session_id: session.id,
    customer_id: session.customer,
    subscription_id: session.subscription,
    livemode: session.livemode,
    plan_price: session.amount_total,
    email: session.customer_email,
    password: Math.floor(100000 + Math.random() * 900000),
    updated_at: now,
  }

  if (!memberPayload.email) {
    console.info('Invalid email given.')

    return
  }

  try {
    const { data, ref } = await faunadb.query(
      q.Get(q.Match(q.Index('unique_members_by_email'), memberPayload.email))
    )

    if (data.session_id === memberPayload.session_id) {
      console.info('Duplicate session.')

      return
    }

    await faunadb.query(q.Update(ref, { data: memberPayload }))
  } catch (error) {
    await faunadb.query(
      q.Create(q.Collection('members'), {
        data: { ...memberPayload, created_at: now },
      })
    )
  }

  await mailer.sendMail({
    from: `"ANSS Foundation" <admin@anss.ca>`,
    to: memberPayload.email,
    replyTo: memberPayload.email,
    subject: `ANSS Foundation: Membership status update`,
    text: `
      Please find your membership details below:-

      Email: ${memberPayload.email}\n
      Password: ${memberPayload.password}\n
      
      Regards,
      ANSS Foundation
    `,
  })
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
