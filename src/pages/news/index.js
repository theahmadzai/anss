import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { List, Row, Col, Typography, Button } from 'antd'
import { TagOutlined, CalendarOutlined } from '@ant-design/icons'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Item } = List
const { Title, Text, Paragraph } = Typography

export const query = graphql`
  query {
    allContentfulNews(sort: { date: DESC }) {
      nodes {
        id
        title
        slug
        tags
        date
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            aspectRatio: 1
            quality: 90
            formats: [AUTO, WEBP]
          )
        }
        body {
          body
        }
      }
    }
  }
`

const LatestNews = ({
  data: {
    allContentfulNews: { nodes: news },
  },
}) => {
  return (
    <Layout>
      <PageHeader title="News" />

      <List
        size="large"
        dataSource={news}
        renderItem={news => (
          <Item>
            <Link to={`/news/${news.slug}`}>
              <Row gutter={[24, 24]}>
                <Col span={24} sm={8} md={6}>
                  <GatsbyImage image={getImage(news.image)} alt={news.title} />
                </Col>
                <Col span={24} sm={16} md={18}>
                  <Title level={2} style={{ marginBottom: 8, fontSize: '1.2rem' }}>
                    {news.title}
                  </Title>
                  <Text style={{ display: 'block', marginBottom: 8 }}>
                    <TagOutlined style={{ marginRight: 8 }} />
                    {news.tags}
                  </Text>
                  <Text style={{ display: 'block', marginBottom: 8 }}>
                    <CalendarOutlined style={{ marginRight: 8 }} />
                    {new Date(news.date).toDateString()}
                  </Text>
                  <Paragraph align="justify" ellipsis={{ rows: 3 }}>
                    {news.body.body}
                  </Paragraph>
                  <Button type="primary">Read More</Button>
                </Col>
              </Row>
            </Link>
          </Item>
        )}
      />
    </Layout>
  )
}

export default LatestNews

export const Head = () => <SEO title="Latest News" pathname="/news" />