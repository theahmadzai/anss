const userService = require('./lib/mongodb');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        error: 'Method not allowed',
        message: 'Only POST requests are accepted'
      })
    };
  }

  try {
    let requestBody;
    try {
      requestBody = typeof event.body === 'string'
        ? JSON.parse(event.body)
        : event.body;
    } catch (parseError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Invalid JSON',
          message: 'Request body must be valid JSON'
        })
      };
    }

    if (!requestBody.firstName || !requestBody.lastName || !requestBody.email || !requestBody.password) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Missing required fields',
          message: 'firstName, lastName, email, and password are required'
        })
      };
    }

    if (requestBody.password !== requestBody.password2) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Passwords must match',
          message: 'Passwords do not match'
        })
      };
    }

    const userData = {
      fullName: `${requestBody.firstName} ${requestBody.lastName}`,
      firstName: requestBody.firstName,
      lastName: requestBody.lastName,
      password: requestBody.password,
      password2: requestBody.password2,
      email: requestBody.email,
    };

    const message = await userService.registerUser(userData);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: message,
      })
    };

  } catch (error) {
    console.error('Registration error:', error);

    let statusCode = 500;
    let errorMessage = error.message || 'Internal server error';

    if (errorMessage.includes('already taken') || errorMessage.includes('duplicate')) {
      statusCode = 409;
    } else if (errorMessage.includes('required') || errorMessage.includes('validation')) {
      statusCode = 400;
    }

    return {
      statusCode,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Registration failed',
        message: errorMessage
      })
    };
  }
};
