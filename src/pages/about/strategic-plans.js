import React from 'react'
import { Row, Typography } from 'antd'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Paragraph } = Typography

const StrategicPlans = () => {
  return (
    <Layout>
      <PageHeader title="Strategic Plans" />

      <Row style={{ padding: '1.5rem' }}>
        <Paragraph align="justify" italic>
          ANSS aims to contribute to the well-being of communities it serves
          through the following three strategic objectives that it will achieve
          in the long-term to realize prosperous, connected and self-reliant
          communities.
        </Paragraph>

        <Paragraph>
          <ul>
            <li>To provide immigration and settlement services to newcomers</li>
            <li>
              To provide cultural, environmental promotion and educational
              services
            </li>
            <li>
              To empower youth, newcomers, immigrants and vulnerable population
              through networking and research
            </li>
          </ul>
        </Paragraph>
      </Row>
    </Layout>
  )
}

export default StrategicPlans

export const Head = () => <SEO title="Strategic Plans" />
