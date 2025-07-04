import React from 'react'
import { graphql } from 'gatsby'
import { List, Row, Col, Typography } from 'antd'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Item } = List
const { Title, Text, Paragraph } = Typography

export const query = graphql`
  query {
    allContentfulDirector(sort: { id: DESC }) {
      nodes {
        id
        name
        designation
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

const BoardOfDirectors = ({
  data: {
    allContentfulDirector: { nodes: directors },
  },
}) => {
  return (
    <Layout>
      <PageHeader title="Board of directors" />

      <List
        size="large"
        dataSource={directors}
        renderItem={director => (
          <Item id={director.id}>
            <Row gutter={[24, 24]}>
              <Col span={24} sm={8} md={6}>
                <GatsbyImage image={getImage(director.image)} alt={director.name} />
              </Col>
              <Col span={24} sm={16} md={18}>
                <Title level={2} style={{ marginBottom: 8, fontSize: '1.2rem' }}>
                  {director.name}
                </Title>
                <Text style={{ display: 'block', marginBottom: 8 }} strong={true}>
                  {director.designation}
                </Text>
                <Paragraph align="justify" ellipsis={{ rows: 5, expandable: true }}>
                  {director.description.description}
                </Paragraph>
              </Col>
            </Row>
          </Item>
        )}
      />
    </Layout>
  )
}

export default BoardOfDirectors

export const Head = () => <SEO title="Board of directors" pathname="/strategic-plans" />