import { graphql, useStaticQuery } from 'gatsby'

const useEvents = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEvent(sort: { order: DESC, fields: date }) {
        nodes {
          id
          title
          slug
          tags
          location
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

  return data.allContentfulEvent.nodes
}

export default useEvents
