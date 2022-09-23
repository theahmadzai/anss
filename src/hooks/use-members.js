import { graphql, useStaticQuery } from 'gatsby'

const useMembers = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMember(sort: { order: DESC, fields: id }) {
        nodes {
          id
          name
          designation
          image {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: TRACED_SVG
              aspectRatio: 1
              quality: 90
              formats: [AUTO, WEBP]
            )
          }
          description {
            description
          }
        }
      }
    }
  `)

  return data.allContentfulMember.nodes
}

export default useMembers
