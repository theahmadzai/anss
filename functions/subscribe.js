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
    
    // Check if subscriber already exists
    const existingSubscriber = await db.collection('Subscribers').findOne({ email });
    
    if (existingSubscriber) {
      return {
        statusCode: 200,
        body: `${existingSubscriber.email}: Already subscribed.`,
      }
    }

    // Create new subscriber
    const result = await db.collection('Subscribers').insertOne({
      email,
      date: Date.now(),
      createdAt: new Date(),
    });

    return {
      statusCode: 200,
      body: `${email}: Subscribed.`,
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Error' }),
    }
  }
}
