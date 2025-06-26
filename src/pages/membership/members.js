import React from 'react'
import { Card, Avatar, Col, Row, Tag, Typography, Empty } from 'antd'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Title } = Typography

const MembersPage = () => {
  return (
    <Layout>
      <PageHeader title="Current Members" />
      
      <div style={{ padding: '2rem' }}>
        <Empty
          description={
            <span>
              <Title level={3}>Members Directory</Title>
              <p>Our members directory is currently being updated. Please check back soon to see our current members.</p>
            </span>
          }
        />
      </div>
    </Layout>
  )
}

export default MembersPage

export const Head = () => <SEO title="Current Members" pathname="/membership/members" />
