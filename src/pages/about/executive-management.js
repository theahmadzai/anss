import React from 'react'
import { Typography, Empty } from 'antd'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Title, Paragraph } = Typography

const ExecutiveManagement = () => {
  return (
    <Layout>
      <PageHeader title="Executive Management" />
      
      <div style={{ padding: '2rem' }}>
        <Empty
          description={
            <span>
              <Title level={3}>Executive Management</Title>
              <Paragraph>
                Information about our executive management team is currently being updated. 
                Please check back soon to learn more about our leadership.
              </Paragraph>
            </span>
          }
        />
      </div>
    </Layout>
  )
}

export default ExecutiveManagement

export const Head = () => <SEO title="Executive Management" pathname="/about/executive-management" />
