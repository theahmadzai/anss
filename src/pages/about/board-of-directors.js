import React from 'react'
import { Typography, Empty } from 'antd'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Title, Paragraph } = Typography

const BoardOfDirectors = () => {
  return (
    <Layout>
      <PageHeader title="Board of Directors" />
      
      <div style={{ padding: '2rem' }}>
        <Empty
          description={
            <span>
              <Title level={3}>Board of Directors</Title>
              <Paragraph>
                Information about our board of directors is currently being updated. 
                Please check back soon to learn more about our leadership team.
              </Paragraph>
            </span>
          }
        />
      </div>
    </Layout>
  )
}

export default BoardOfDirectors

export const Head = () => <SEO title="Board of Directors" pathname="/about/board-of-directors" />
