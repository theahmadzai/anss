const stripe = require('./lib/stripe')
const mailer = require('./lib/mailer')
const { connectToDatabase } = require('./lib/mongodb')

/**
 * @param {import('stripe').default.Checkout.Session} session
 */
const handleCheckoutComplete = async session => {
  const { db } = await connectToDatabase();

  // Check if member already exists
  let member = await db.collection('Members').findOne({ session_id: session.id });

  if (!member) {
    // Create new member
    const memberData = {
      id: Math.floor(100000 + Math.random() * 900000),
      session_id: session.id,
      customer_id: session.customer,
      subscription_id: session.subscription,
      livemode: session.livemode,
      plan_price: session.amount_total,
      email: session.customer_email ?? 'info@anss.ca',
      updated_at: Date.now(),
      created_at: Date.now(),
    };

    const result = await db.collection('Members').insertOne(memberData);
    member = { ...memberData, _id: result.insertedId };
  }

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
      process.env.STRIPE_WEBHOOK_SECRET,
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
