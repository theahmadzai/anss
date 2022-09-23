import React from 'react'
import { Row, Typography } from 'antd'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Paragraph } = Typography

const CulturalEnvironmentalAndEducational = () => {
  return (
    <Layout>
      <PageHeader title="Cultural, Environmental &amp; Educational" />

      <Row style={{ padding: '1.5rem' }}>
        <Paragraph>
          <ul>
            <li>
              Referrals for Credentialed Assessment of educational documents
            </li>
            <li>
              Organizing community events to raise awareness about environmental
              protection, waste collection and disposal, food safety and mental
              health
            </li>
            <li>To organize cultural events</li>
            <li>To promote cultural diversity through educational programs</li>
          </ul>
        </Paragraph>
      </Row>
    </Layout>
  )
}

export default CulturalEnvironmentalAndEducational

export const Head = () => (
  <SEO title="Cultural, Environmental &amp; Educational" />
)
