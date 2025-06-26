const { connectToDatabase } = require('./lib/mongodb')

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

    const { db } = await connectToDatabase();
    
    const result = await db.collection('Subscribers').deleteOne({ email });

    if (result.deletedCount === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Subscriber not found' }),
      }
    }

    return {
      statusCode: 200,
      body: `Unsubscribed.`,
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.toString() }),
    }
  }
}
