import React from 'react'
import { Card, Avatar, Col, Row, Tag, Typography } from 'antd'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Title } = Typography

/*export const query = graphql`
  query {
    allContentfulMember(sort: { tier: DESC }) {
      nodes {
        id
        name
        tier
        image {
          url
        }
      }
    }
  }
*/

const tierColors = {
  Gold: 'gold',
  Silver: 'silver',
  Bronze: '#cd7f32',
}

const MembersPage = ({
  data: {
    allContentfulMember: { nodes: members },
  },
}) => {
  return (
    <Layout>
      <PageHeader title="Current Members" />

      <Row gutter={[24, 24]} justify="start" style={{ padding: '24px' }}>
        {members.map(member => (
          <Col key={member.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{ borderRadius: '12px', textAlign: 'center' }}
              cover={
                <Avatar
                  size={100}
                  src={member.image.url}
                  style={{ margin: '24px auto 12px' }}
                />
              }
            >
              <Title level={4} style={{ marginBottom: 8 }}>
                {member.name}
              </Title>
              <Tag color={tierColors[member.tier] || 'blue'}>{member.tier} Member</Tag>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export default MembersPage

export const Head = () => <SEO title="Current Members" pathname="/membership/members" />
