const { query: q } = require('faunadb')
const faunadb = require('./lib/faunadb')

exports.handler = async ({ httpMethod, queryStringParameters }) => {
  if (httpMethod !== 'GET') {
    return {
      statusCode: 410,
      body: JSON.stringify({ message: 'Unsupported Request Method' }),
    }
  }

  try {
    const { email } = queryStringParameters

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid input' }),
      }
    }

    const { data } = await faunadb.query(
      q.If(
        q.Exists(q.Match(q.Index('unique_subscribers_by_email'), email)),
        q.Get(q.Match(q.Index('unique_subscribers_by_email'), email)),
        q.Create(q.Collection('subscribers'), {
          data: {
            email,
            date: Date.now(),
          },
        }),
      ),
    )

    return {
      statusCode: 200,
      body: `${data.email}: Subscribed.`,
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Error' }),
    }
  }
}
