import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Typography } from 'antd'
import {
  TagOutlined,
  CalendarOutlined,
  CompassOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Paragraph, Text } = Typography

export const query = graphql`
  query ($slug: String!) {
    event: contentfulEvent(slug: { eq: $slug }) {
      title
      slug
      tags
      location
      date
      image {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: DOMINANT_COLOR
          aspectRatio: 2
          height: 250
          quality: 100
          formats: [AUTO, WEBP]
        )
      }
      body {
        body
      }
    }
  }
`

const Event = ({ data: { event } }) => {
  return (
    <Layout>
      <PageHeader title={event.title} />

      <GatsbyImage style={{ height: '300px' }} image={getImage(event.image)} alt={event.title} />

      <div style={{ padding: '1.5rem' }}>
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
          {new Date(event.date) > Date.now() ? 'Upcoming Event' : 'Past Event'}
        </Text>
        <Paragraph align="justify">{event.body.body}</Paragraph>
      </div>
    </Layout>
  )
}

export const Head = ({ data: { event } }) => (
  <SEO title={event.title} pathname={'/events/' + event.slug} />
)

export default Event
