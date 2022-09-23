import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { List, Row, Col, Typography, Button } from 'antd'
import { TagOutlined, CalendarOutlined } from '@ant-design/icons'
import useNews from '../../hooks/use-news'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Item } = List
const { Title, Text, Paragraph } = Typography

const LatestNews = () => {
  const news = useNews()

  return (
    <Layout>
      <PageHeader title="News" />

      <List
        size="large"
        dataSource={news}
        renderItem={news => (
          <Item>
            <Row gutter={[24, 24]}>
              <Col span={24} sm={8} md={6}>
                <GatsbyImage image={getImage(news.image)} alt={news.title} />
              </Col>
              <Col span={24} sm={16} md={18}>
                <Title
                  level={2}
                  style={{ marginBottom: 8, fontSize: '1.2rem' }}
                >
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
                <Link to={`/news/${news.slug}`}>
                  <Button type="primary">Read More</Button>
                </Link>
              </Col>
            </Row>
          </Item>
        )}
      />
    </Layout>
  )
}

export default LatestNews

export const Head = () => <SEO title="Latest News" />
