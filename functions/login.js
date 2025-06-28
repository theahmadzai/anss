const userService = require('./lib/mongobd');
const jwt = require('jsonwebtoken');

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
    const requestBody = typeof event.body === 'string' 
      ? JSON.parse(event.body) 
      : event.body;

    const user = await userService.checkUser(requestBody);

    console.log("User from DB:", user)

    const payload = {
      _id: user._id,
      userName: user.fullName,
      userFirstName: user.firstName
    };


    const token = jwt.sign(payload, process.env.JWT_SECRET);
    console.log("the toke is ", token)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Login successful",
        token
      })
    };

  } catch (err) {
    return {
      statusCode: 422,
      headers,
      body: JSON.stringify({
        message: err.message || "Login failed"
      })
    };
  }
};
