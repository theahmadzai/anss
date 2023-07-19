import React from 'react'
import { Row, Typography } from 'antd'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Paragraph } = Typography

const CulturalProgramsPage = () => {
  return (
    <Layout>
      <PageHeader title="Cultural Programs" />

      <Row style={{ padding: '1.5rem' }}>
        <Paragraph>
          <ul>
            <li>Identify gross-root community concerns and issues through conducting researches</li>
            <li>
              Proposing viable and evidence-informed recommendations to solve community issues
            </li>
            <li>Organizing networking events and community gatherings</li>
            <li>
              Facilitating employment opportunities and trainings, and referral of jobseekers to
              employers
            </li>
          </ul>
        </Paragraph>
      </Row>
    </Layout>
  )
}

export default CulturalProgramsPage

export const Head = () => <SEO title="Cultural Programs" pathname="/programs/cultural-programs" />
