import React from 'react'
import { List, Avatar } from 'antd'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

export const query = graphql`
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
`

const MembersPage = ({
  data: {
    allContentfulMember: { nodes: members },
  },
}) => {
  return (
    <Layout>
      <PageHeader title="Current Members" />

      <List
        size="large"
        dataSource={members}
        renderItem={member => (
          <List.Item key={member.id}>
            <List.Item.Meta
              avatar={<Avatar src={member.image.url} />}
              title={member.name}
              description={member.tier}
            />
          </List.Item>
        )}
      />
    </Layout>
  )
}

export default MembersPage

export const Head = () => (
  <SEO title="Current Members" pathname="/membership/members" />
)
