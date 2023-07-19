require('dotenv').config()

const newsQuery = {
  query: `{
    allContentfulNews {
      nodes {
        id
        title
        slug
        tags
        date
        image {
          url
        }
        body {
          body
        }
      }
    }
  }`,
  transformer: ({ data }) =>
    data.allContentfulNews.nodes.map(
      ({ id, slug, image: { url: imageUrl }, body: { body }, ...props }) => ({
        objectID: id,
        slug: '/news/' + slug,
        imageUrl,
        body,
        ...props,
      })
    ),
  indexName: 'news',
  settings: { attributesToSnippet: [`body:20`] },
}

const eventsQuery = {
  query: `{
    allContentfulEvent {
      nodes {
        id
        title
        slug
        tags
        date
        location
        image {
          url
        }
        body {
          body
        }
      }
    }
  }`,
  transformer: ({ data }) =>
    data.allContentfulEvent.nodes.map(
      ({ id, slug, image: { url: imageUrl }, body: { body }, ...props }) => ({
        objectID: id,
        slug: '/events/' + slug,
        imageUrl,
        body,
        ...props,
      })
    ),
  indexName: 'events',
  settings: { attributesToSnippet: [`body:20`] },
}

module.exports = {
  trailingSlash: 'never',
  siteMetadata: {
    siteUrl: process.env.GATSBY_STIE_URL || `https://anss.ca`,
    title: `ANSS`,
    description:
      'ANSS Foundation established by a team of professional Afghans in Toronto, Canada and is a non-political, non-profit and an impartial organization, established in 2017.',
    social: {
      facebook: 'https://www.facebook.com/ANSSFoundation/',
      twitter: 'https://twitter.com/AnssFoundation',
      instagram: 'https://www.instagram.com/anss_foundation/',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: 'lr1qbgzzmuyd',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'nil',
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: [newsQuery, eventsQuery],
      },
    },
    {
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: 'antd',
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#27458D',
            '@font-size-base': '16px',
            '@font-family': 'Open Sans',
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ANSS Foundation',
        short_name: 'ANSS',
        start_url: '/',
        background_color: '#27458D',
        theme_color: '#27458D',
        display: 'standalone',
        icon: './static/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-minify-classnames',
    'gatsby-plugin-offline',
  ],
}
