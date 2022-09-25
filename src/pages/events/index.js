import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { List, Row, Col, Typography } from 'antd'
import {
  TagOutlined,
  CalendarOutlined,
  CompassOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
import useEvents from '../../hooks/use-events'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Item } = List
const { Title, Text, Paragraph } = Typography

const Events = () => {
  const events = useEvents()

  return (
    <Layout>
      <PageHeader title="Events" />

      <List
        size="large"
        dataSource={events}
        renderItem={event => (
          <Item>
            <Link to={`/events/${event.slug}`}>
              <Row gutter={[24, 24]}>
                <Col span={24} sm={8} md={6}>
                  <GatsbyImage
                    image={getImage(event.image)}
                    alt={event.title}
                  />
                </Col>
                <Col span={24} sm={16} md={18}>
                  <Title
                    level={2}
                    style={{ marginBottom: 8, fontSize: '1.2rem' }}
                  >
                    {event.title}
                  </Title>
                  <Text style={{ display: 'block', marginBottom: 8 }}>
                    <TagOutlined style={{ marginRight: 8 }} />
                    {event.tags}
                  </Text>
                  <Text style={{ display: 'block', marginBottom: 8 }}>
                    <CompassOutlined style={{ marginRight: 8 }} />
                    {event.location}
                  </Text>
                  <Text style={{ display: 'block', marginBottom: 8 }}>
                    <CalendarOutlined style={{ marginRight: 8 }} />
                    {new Date(event.date).toDateString()}
                  </Text>
                  <Text style={{ display: 'block', marginBottom: 8 }}>
                    <ClockCircleOutlined style={{ marginRight: 8 }} />
                    {new Date(event.date) > Date.now()
                      ? 'Upcoming Event'
                      : 'Past Event'}
                  </Text>
                  <Paragraph align="justify" ellipsis={{ rows: 3 }}>
                    {event.body.body}
                  </Paragraph>
                </Col>
              </Row>
            </Link>
          </Item>
        )}
      />
    </Layout>
  )
}

export default Events

export const Head = () => <SEO title="Events" />