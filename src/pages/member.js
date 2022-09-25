import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'

const MemberPage = () => {
  return (
    <Layout>
      <PageHeader title="Member" />
    </Layout>
  )
}

export default MemberPage

export const Head = () => <SEO title="Member" pathname="/member" />
