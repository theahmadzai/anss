import React from 'react'
import { Typography } from 'antd'
import SEO from '../components/seo'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'

const { Paragraph } = Typography

const DonatePage = () => {
  return (
    <Layout>
      <PageHeader title="Donate" />
      <div style={{ margin: '1.5rem 1.5rem' }}>
        <Paragraph>This section is under construction</Paragraph>
      </div>
    </Layout>
  )
}

export default DonatePage

export const Head = () => <SEO title="Donate" />
