const faunadb = require('faunadb')

module.exports = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
  domain: 'db.us.fauna.com',
  keepAlive: false,
})
