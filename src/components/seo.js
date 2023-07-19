import React, { Fragment } from 'react'
import useSiteMetadata from '../hooks/use-sitemetadata'

const SEO = ({ title, description, pathname }) => {
  const { siteUrl, title: defaultTitle, description: defaultDescription } = useSiteMetadata()

  title = `${title} | ${defaultTitle}`
  description ??= defaultDescription
  pathname ??= '/'

  return (
    <Fragment>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteUrl + '/logo.png'} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl + pathname} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo.png" />
    </Fragment>
  )
}

export default SEO
