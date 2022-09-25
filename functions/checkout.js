const Stripe = require('stripe').default

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

exports.handler = async event => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 410,
      body: JSON.stringify({ message: 'Unsupported Request Method' }),
    }
  }

  try {
    const { id, email } = event.queryStringParameters

    if (!id || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid input' }),
      }
    }

    const price = await stripe.prices.retrieve(id)

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: price.id, quantity: 1 }],
      mode: price.type === 'recurring' ? 'subscription' : 'payment',
      success_url: process.env.GATSBY_STIE_URL + '/member',
      cancel_url: process.env.GATSBY_STIE_URL + '/membership',
      automatic_tax: { enabled: true },
      customer_email: email,
    })

    return {
      statusCode: 302,
      headers: {
        Location: session.url,
      },
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.toString() }),
    }
  }
}
