import React from 'react'
import { Typography, Row, Col, Card, Empty } from 'antd'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Title, Text, Paragraph } = Typography

const LatestNews = () => {
  return (
    <Layout>
      <PageHeader title="News" />
      
      <div style={{ padding: '2rem' }}>
        <Empty
          description={
            <span>
              <Title level={3}>No News Available</Title>
              <Paragraph>
                We're currently updating our news system. Please check back soon for the latest updates and announcements.
              </Paragraph>
            </span>
          }
        />
      </div>
    </Layout>
  )
}

export default LatestNews

export const Head = () => <SEO title="Latest News" pathname="/news" />
