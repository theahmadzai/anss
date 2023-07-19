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
    allContentfulTrustee(sort: { id: DESC }) {
      nodes {
        id
        name
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: DOMINANT_COLOR
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

const BoardOfTrustees = ({
  data: {
    allContentfulTrustee: { nodes: trustees },
  },
}) => {
  return (
    <Layout>
      <PageHeader title="Board of Trustees" />

      <List
        size="large"
        dataSource={trustees}
        renderItem={trustee => (
          <Item>
            <Row gutter={[24, 24]}>
              <Col span={24} sm={8} md={6}>
                <GatsbyImage
                  image={getImage(trustee.image)}
                  alt={trustee.name}
                />
              </Col>
              <Col span={24} sm={16} md={18}>
                <Title
                  level={2}
                  style={{ marginBottom: 8, fontSize: '1.2rem' }}
                >
                  {trustee.name}
                </Title>
                <Paragraph
                  align="justify"
                  ellipsis={{ rows: 5, expandable: true }}
                >
                  {trustee.description.description}
                </Paragraph>
              </Col>
            </Row>
          </Item>
        )}
      />
    </Layout>
  )
}

export default BoardOfTrustees

export const Head = () => (
  <SEO title="Board of Trustees" pathname="/board-of-trustees" />
)
