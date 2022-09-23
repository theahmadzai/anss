import React from 'react'
import { List, Row, Col, Typography } from 'antd'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import useMembers from '../../hooks/use-members'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Item } = List
const { Title, Text, Paragraph } = Typography

const BoardOfDirectors = () => {
  const members = useMembers()

  return (
    <Layout>
      <PageHeader title="Board of directors" />

      <List
        size="large"
        dataSource={members}
        renderItem={member => (
          <Item>
            <Row gutter={[24, 24]}>
              <Col span={24} sm={8} md={6}>
                <GatsbyImage image={getImage(member.image)} alt={member.name} />
              </Col>
              <Col span={24} sm={16} md={18}>
                <Title
                  level={2}
                  style={{ marginBottom: 8, fontSize: '1.2rem' }}
                >
                  {member.name}
                </Title>
                <Text
                  style={{ display: 'block', marginBottom: 8 }}
                  strong={true}
                >
                  {member.designation}
                </Text>
                <Paragraph
                  align="justify"
                  ellipsis={{ rows: 5, expandable: true }}
                >
                  {member.description.description}
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

export const Head = () => <SEO title="Board of directors" />
