require('dotenv').config();

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
        internal {
          contentDigest
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
      }),
    ),
  indexName: 'news',
  settings: { attributesToSnippet: ['body:20'] },
};

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
        internal {
          contentDigest
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
      }),
    ),
  indexName: 'events',
  settings: { attributesToSnippet: ['body:20'] },
};

const directorsQuery = {
  query: `{
    allContentfulDirector {
      nodes {
        id
        name
        designation
        image {
          url
        }
        description {
          description
        }
        internal {
          contentDigest
        }
      }
    }
  }`,
  transformer: ({ data }) =>
    data.allContentfulDirector.nodes.map(
      ({
        id,
        image: { url: imageUrl },
        name: title,
        description: { description: body },
        ...props
      }) => ({
        objectID: id,
        slug: '/about/board-of-directors#' + id,
        imageUrl,
        title,
        body,
        ...props,
      }),
    ),
  indexName: 'directors',
  settings: { attributesToSnippet: ['body:20'] },
};

const trusteesQuery = {
  query: `{
    allContentfulTrustee {
      nodes {
        id
        name
        image {
          url
        }
        description {
          description
        }
        internal {
          contentDigest
        }
      }
    }
  }`,
  transformer: ({ data }) =>
    data.allContentfulTrustee.nodes.map(
      ({
        id,
        image: { url: imageUrl },
        name: title,
        description: { description: body },
        ...props
      }) => ({
        objectID: id,
        slug: '/about/board-of-trustees#' + id,
        imageUrl,
        title,
        body,
        ...props,
      }),
    ),
  indexName: 'trustees',
  settings: { attributesToSnippet: ['body:20'] },
};

const managersQuery = {
  query: `{
    allContentfulManager {
      nodes {
        id
        name
        image {
          url
        }
        description {
          description
        }
        internal {
          contentDigest
        }
      }
    }
  }`,
  transformer: ({ data }) =>
    data.allContentfulManager.nodes.map(
      ({
        id,
        image: { url: imageUrl },
        name: title,
        description: { description: body },
        ...props
      }) => ({
        objectID: id,
        slug: '/about/executive-management#' + id,
        imageUrl,
        title,
        body,
        ...props,
      }),
    ),
  indexName: 'managers',
  settings: { attributesToSnippet: ['body:20'] },
};

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_STIE_URL || 'https://anss.ca',
    title: 'ANSS',
    description:
      'ANSS Foundation established by a team of professional Afghans in Toronto, Canada and is a non-political, non-profit and an impartial organization, established in 2017.',
    social: {
      facebook: 'https://www.facebook.com/ANSSFoundation/',
      twitter: 'https://twitter.com/AnssFoundation',
      instagram: 'https://www.instagram.com/anssfoundation/',
    },
  },
  trailingSlash: 'never',
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
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'nil',
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: [newsQuery, eventsQuery, directorsQuery, trusteesQuery, managersQuery],
      },
    },
    {
      resolve: 'gatsby-plugin-less',
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
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-minify-classnames',
    'gatsby-plugin-offline',
  ],
};
