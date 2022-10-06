import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'

const DonatePage = () => {
  return (
    <Layout>
      <PageHeader title="Donate" />
    </Layout>
  )
}

export default DonatePage

export const Head = () => <SEO title="Donate" pathname="/donate" />
