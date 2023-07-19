import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Typography } from 'antd'
import { TagOutlined, CalendarOutlined } from '@ant-design/icons'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Paragraph, Text } = Typography

export const query = graphql`
  query ($slug: String!) {
    news: contentfulNews(slug: { eq: $slug }) {
      title
      slug
      tags
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

const News = ({ data: { news } }) => {
  return (
    <Layout>
      <PageHeader title={news.title} />

      <GatsbyImage style={{ height: '300px' }} image={getImage(news.image)} alt={news.title} />

      <div style={{ padding: '1.5rem' }}>
        <Text style={{ display: 'block', marginBottom: 8 }}>
          <TagOutlined style={{ marginRight: 8 }} />
          {news.tags}
        </Text>
        <Text style={{ display: 'block', marginBottom: 8 }}>
          <CalendarOutlined style={{ marginRight: 8 }} />
          {new Date(news.date).toDateString()}
        </Text>
        <Paragraph align="justify">{news.body.body}</Paragraph>
      </div>
    </Layout>
  )
}

export const Head = ({ data: { news } }) => (
  <SEO title={news.title} pathname={'/news/' + news.slug} />
)

export default News
