import { graphql, useStaticQuery } from 'gatsby'

const useSlides = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSlide {
        nodes {
          id
          title
          url
          image {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              aspectRatio: 1
              quality: 90
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  `)

  return data.allContentfulSlide.nodes
}

export default useSlides
