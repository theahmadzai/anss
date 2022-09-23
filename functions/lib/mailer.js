const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: String(process.env.MAIL_TLS).toLowerCase() === 'true',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})
