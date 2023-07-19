const { query: q } = require('faunadb')
const faunadb = require('./lib/faunadb')
const stripe = require('./lib/stripe')

exports.handler = async ({ httpMethod, body }) => {
  if (httpMethod !== 'POST') {
    return {
      statusCode: 410,
      body: JSON.stringify({ message: 'Unsupported Request Method' }),
    }
  }

  try {
    const { id } = JSON.parse(body)

    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid input' }),
      }
    }

    try {
      const { data: member } = await faunadb.query(
        q.Get(q.Match(q.Index('unique_members_by_id'), Number(id))),
      )

      const subscription = await stripe.subscriptions.retrieve(member.subscription_id, {
        expand: ['items.data.price.product'],
      })

      if (subscription.status !== 'active') {
        throw new Error('Inactive subscription.')
      }

      const price = subscription.items.data?.[0]?.price

      return {
        statusCode: 200,
        body: JSON.stringify({
          member: {
            email: member.email,
          },
          subscription: {
            start_date: subscription.start_date,
            current_period_start: subscription.current_period_start,
            current_period_end: subscription.current_period_end,
          },
          product: {
            name: price.product.name,
            images: price.product.images,
            amount: price.unit_amount,
            currency: price.currency,
          },
        }),
      }
    } catch (error) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Unauthorized.' }),
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Error' }),
    }
  }
}
