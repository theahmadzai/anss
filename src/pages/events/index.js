import React from 'react'
import { Typography, Row, Col, Card, Empty } from 'antd'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Title, Text, Paragraph } = Typography

const Events = () => {
  return (
    <Layout>
      <PageHeader title="Events" />
      
      <div style={{ padding: '2rem' }}>
        <Empty
          description={
            <span>
              <Title level={3}>No Events Available</Title>
              <Paragraph>
                We're currently updating our events system. Please check back soon for upcoming events and activities.
              </Paragraph>
            </span>
          }
        />
      </div>
    </Layout>
  )
}

export default Events

export const Head = () => <SEO title="Events" pathname="/events" />
