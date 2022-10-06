import React from 'react'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const BenefitsPage = () => {
  return (
    <Layout>
      <PageHeader title="Membership Benefits" />
    </Layout>
  )
}

export default BenefitsPage

export const Head = () => (
  <SEO title="Membership Benefits" pathname="/membership/benefits" />
)
