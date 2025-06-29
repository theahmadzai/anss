const stripe = require('./lib/stripe')

exports.handler = async ({ httpMethod, queryStringParameters }) => {
  if (httpMethod !== 'GET') {
    return {
      statusCode: 410,
      body: JSON.stringify({ message: 'Unsupported Request Method' }),
    }
  }

  try {
    const { amount, email } = queryStringParameters

    if (!amount && !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid input' }),
      }
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product_data: {
              name: 'Donation',
            },
            unit_amount: amount,
            currency: 'CAD',
            tax_behavior: 'exclusive',
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      submit_type: 'donate',
      success_url: process.env.GATSBY_STIE_URL,
      cancel_url: process.env.GATSBY_STIE_URL + '/donate',
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