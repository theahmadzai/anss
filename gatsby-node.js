require('dotenv').config()
const Stripe = require('stripe').default

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MembershipPlan implements Node @dontInfer {
      id: String!
      price: Int!
      currency: String!
      title: String!
      description: String!
      images: [String]!
    }
  `)
}

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { data } = await stripe.prices.list({
    active: true,
    expand: ['data.product'],
  })

  data.forEach(price => {
    actions.createNode({
      id: price.id,
      price: price.unit_amount,
      currency: price.currency,
      title: price.product.name ?? '',
      description: price?.nickname ?? '',
      images: price.product.images ?? [],
      internal: {
        type: 'MembershipPlan',
        contentDigest: createContentDigest(price),
      },
    })
  })
}
