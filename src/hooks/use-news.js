import { graphql, useStaticQuery } from 'gatsby'

const useNews = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNews(sort: { order: DESC, fields: date }) {
        nodes {
          id
          title
          slug
          tags
          date
          image {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              aspectRatio: 1
              quality: 90
              formats: [AUTO, WEBP]
            )
          }
          body {
            body
          }
        }
      }
    }
  `)

  return data.allContentfulNews.nodes
}

export default useNews
