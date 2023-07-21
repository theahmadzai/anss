import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Carousel, List, Card, Typography, Row, Col, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import SEO from '../components/seo'
import Layout from '../components/layout'

const { Title, Paragraph } = Typography

export const query = graphql`
  query {
    allContentfulSlide {
      nodes {
        id
        title
        url
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            aspectRatio: 1
            quality: 90
            formats: [AUTO, WEBP]
          )
        }
      }
    }

    allContentfulNews(sort: { date: DESC }, limit: 3) {
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

    allContentfulEvent(sort: { date: DESC }, limit: 3) {
      nodes {
        id
        title
        slug
        tags
        location
        date
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: DOMINANT_COLOR
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

const IndexPage = ({
  data: {
    allContentfulSlide: { nodes: slides },
    allContentfulNews: { nodes: news },
    allContentfulEvent: { nodes: events },
  },
}) => {
  return (
    <Layout>
      <Carousel autoplay dotPosition="top" rows={1} style={{ background: 'var(--primary-color)' }}>
        {slides.map(slide => (
          <div key={slide.id}>
            <GatsbyImage
              className="slideImage"
              image={getImage(slide.image)}
              alt={slide.title}
              objectFit="contain"
              imgStyle={{ objectPosition: 'top' }}
            />
            <div
              style={{
                padding: '1.5rem',
                background: 'var(--primary-color)',
              }}>
              <Link to={slide.url} rel="nofollow" target="_blank">
                <Title
                  level={2}
                  style={{
                    margin: 0,
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    color: '#FFFFFF',
                  }}>
                  {slide.title}
                </Title>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="wavesWrapper">
        <div className="waves">
          <svg viewBox="0 0 800 600">
            <path
              d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
              fill="#27458D"></path>
            <path
              d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
              fill="#3459a6"></path>
            <path
              d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
              fill="#27458D"></path>
          </svg>
        </div>
      </div>

      <div style={{ overflow: 'hidden' }}>
        <Row style={{ padding: '1.5rem 3rem' }} gutter={[48, 48]}>
          <Col span={24} sm={12} md={8}>
            <div className="homeCard">
              <h2>Vision</h2>
              <p>Prosperous, connected and self-reliant communities</p>
            </div>
          </Col>

          <Col span={24} sm={12} md={8}>
            <div className="homeCard">
              <h2>Mission</h2>
              <p>To provide quality social services for concerned communities</p>
            </div>
          </Col>

          <Col span={24} sm={12} md={8}>
            <div className="homeCard">
              <h2>Core Values</h2>
              <ul>
                <li>Integrity</li>
                <li>Transparency</li>
                <li>Professionalism</li>
                <li>Diversity</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div
        style={{
          background: '#FAFAFA',
          height: '200px',
          margin: '1.5rem 0',
          border: '1px solid #F0F0F0',
          display: 'flex',
          alignItems: 'center',
        }}>
        <Link to="/membership/benefits" style={{ display: 'block', margin: '0 auto' }}>
          <Button type="primary" shape="round" size="large" icon={<UserOutlined />}>
            Become our Member
          </Button>
        </Link>
      </div>

      <Title level={2} align="center">
        Latest News
      </Title>

      <List
        style={{ padding: '1.5rem' }}
        grid={{
          gutter: [24, 24],
          column: 3,
          xs: 1,
          sm: 2,
          md: 3,
        }}
        dataSource={news.slice(Math.max(news.length - 3, 0))}
        renderItem={news => (
          <List.Item>
            <Link to={'/news/' + news.slug}>
              <Card
                hoverable
                cover={
                  <GatsbyImage
                    style={{ width: '100%', height: '250px' }}
                    image={getImage(news.image)}
                    alt={news.title}
                  />
                }>
                <Card.Meta
                  title={news.title}
                  description={<Paragraph ellipsis={{ rows: 4 }}>{news.body.body}</Paragraph>}
                />
              </Card>
            </Link>
          </List.Item>
        )}
      />

      <Title level={2} align="center">
        Events
      </Title>

      <List
        style={{ padding: '1.5rem' }}
        grid={{
          gutter: [24, 24],
          column: 3,
          xs: 1,
          sm: 2,
          md: 3,
        }}
        dataSource={events.slice(Math.max(events.length - 3, 0))}
        renderItem={event => (
          <List.Item>
            <Link to={'/events/' + event.slug}>
              <Card
                hoverable
                cover={
                  <GatsbyImage
                    style={{ width: '100%', height: '250px' }}
                    image={getImage(event.image)}
                    alt={event.title}
                  />
                }>
                <Card.Meta
                  title={event.title}
                  description={<Paragraph ellipsis={{ rows: 4 }}>{event.body.body}</Paragraph>}
                />
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO title="Home" />
