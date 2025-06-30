const userService = require('./lib/mongodb');
const jwt = require('jsonwebtoken');

exports.handler = async (event) => {
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json'
};

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        error: 'Method not allowed',
        message: 'Only GET requests are accepted'
      })
    };
  }
  try {
    const userID = event.pathParameters?.id || event.queryStringParameters?.id;
    
    if (!userID) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Missing parameter',
          message: 'User ID is required'
        })
      };
    }

    if (!userID.match(/^[0-9a-fA-F]{24}$/)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Invalid ID format',
          message: 'User ID must be a valid ObjectId'
        })
      };
    }

   // In your backend function
    const authHeader = event.headers.authorization || event.headers.Authorization;
      if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1]; // Extract the token
      // eslint-disable-next-line no-unused-vars
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
    }

    const userData = await userService.getUser(userID);
    if (!userData) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({
          error: 'User not found',
          message: 'No user found with the provided ID'
        })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: userData
      })
    };

  } catch (error) {
    console.error('Get user error:', error);
    
    let statusCode = 500;
    let errorMessage = 'Internal server error';
    
    if (error.name === 'CastError') {
      statusCode = 400;
      errorMessage = 'Invalid user ID format';
    } else if (error.name === 'ValidationError') {
      statusCode = 400;
      errorMessage = error.message;
    }

    return {
      statusCode,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Failed to fetch user data',
        message: errorMessage
      })
    };
  }
};