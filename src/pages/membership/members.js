import React from 'react'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const MembersPage = () => {
  return (
    <Layout>
      <PageHeader title="Current Members" />
    </Layout>
  )
}

export default MembersPage

export const Head = () => (
  <SEO title="Current Members" pathname="/membership/members" />
)
