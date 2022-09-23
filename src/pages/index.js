import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Carousel, List, Card, Typography, Divider, Row, Col } from 'antd'
import useSlides from '../hooks/use-slides'
import useNews from '../hooks/use-news'
import SEO from '../components/seo'
import Layout from '../components/layout'

const { Title, Paragraph } = Typography

const IndexPage = () => {
  const slides = useSlides()
  const news = useNews()

  return (
    <Layout>
      <Carousel
        autoplay
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {slides.map(slide => (
          <div key={slide.id}>
            <GatsbyImage
              style={{ width: '100%', height: '350px' }}
              image={getImage(slide.image)}
              alt={slide.title}
            />
            <div
              style={{
                padding: '1.5rem',
                background: 'var(--primary-color)',
              }}
            >
              <Link to={slide.url} rel="nofollow" target="_blank">
                <Title
                  level={2}
                  style={{ margin: 0, fontSize: '1.2rem', color: '#FFFFFF' }}
                >
                  {slide.title}
                </Title>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="plate">
        <div className="wavesWrapper">
          <div className="waves">
            <svg viewBox="0 0 800 600">
              <path
                d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
                fill="#27458D"
              ></path>
              <path
                d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
                fill="#3459a6"
              ></path>
              <path
                d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
                fill="#27458D"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <Row style={{ padding: '1.5rem' }} gutter={[24, 24]}>
        <Col span={24} sm={8}>
          <div className="homeCard">
            <h2>Vision</h2>
            <p>Prosperous, connected and self-reliant communities</p>
          </div>
        </Col>

        <Col span={24} sm={8}>
          <div className="homeCard">
            <h2>Mission</h2>
            <p>To provide quality social services for concerned communities</p>
          </div>
        </Col>

        <Col span={24} sm={8}>
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

      <Divider />

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
                    style={{ width: '100%', height: '200px' }}
                    image={getImage(news.image)}
                    alt={news.title}
                  />
                }
              >
                <Card.Meta
                  title={news.title}
                  description={
                    <Paragraph ellipsis={{ rows: 4 }}>
                      {news.body.body}
                    </Paragraph>
                  }
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
