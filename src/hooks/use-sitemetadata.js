import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          description
          social {
            facebook
            twitter
            instagram
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
