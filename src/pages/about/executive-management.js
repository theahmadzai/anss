import React from 'react'
import { graphql } from 'gatsby'
import { List, Row, Col, Typography } from 'antd'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Item } = List
const { Title, Paragraph } = Typography

export const query = graphql`
  query {
    allContentfulManager(sort: { order: DESC, fields: id }) {
      nodes {
        id
        name
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
            aspectRatio: 1
            quality: 90
            formats: [AUTO, WEBP]
          )
        }
        description {
          description
        }
      }
    }
  }
`

const ExecutiveManagement = ({
  data: {
    allContentfulManager: { nodes: managers },
  },
}) => {
  return (
    <Layout>
      <PageHeader title="Executive Management" />

      <List
        size="large"
        dataSource={managers}
        renderItem={manager => (
          <Item>
            <Row gutter={[24, 24]}>
              <Col span={24} sm={8} md={6}>
                <GatsbyImage
                  image={getImage(manager.image)}
                  alt={manager.name}
                />
              </Col>
              <Col span={24} sm={16} md={18}>
                <Title
                  level={2}
                  style={{ marginBottom: 8, fontSize: '1.2rem' }}
                >
                  {manager.name}
                </Title>
                <Paragraph
                  align="justify"
                  ellipsis={{ rows: 5, expandable: true }}
                >
                  {manager.description.description}
                </Paragraph>
              </Col>
            </Row>
          </Item>
        )}
      />
    </Layout>
  )
}

export default ExecutiveManagement

export const Head = () => (
  <SEO title="Executive Management" pathname="/executive-management" />
)
