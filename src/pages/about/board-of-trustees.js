import React from 'react'
import { Typography, Empty } from 'antd'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Title, Paragraph } = Typography

const BoardOfTrustees = () => {
  return (
    <Layout>
      <PageHeader title="Board of Trustees" />
      
      <div style={{ padding: '2rem' }}>
        <Empty
          description={
            <span>
              <Title level={3}>Board of Trustees</Title>
              <Paragraph>
                Information about our board of trustees is currently being updated. 
                Please check back soon to learn more about our governance team.
              </Paragraph>
            </span>
          }
        />
      </div>
    </Layout>
  )
}

export default BoardOfTrustees

export const Head = () => <SEO title="Board of Trustees" pathname="/about/board-of-trustees" />
