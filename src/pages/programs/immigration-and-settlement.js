import React from 'react'
import { Row, Typography } from 'antd'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Paragraph } = Typography

const ImmigrationAndSettlement = () => {
  return (
    <Layout>
      <PageHeader title="Immigration and Settlement" />

      <Row style={{ padding: '1.5rem' }}>
        <Paragraph>
          <ul>
            <li>Immigration and citizenship applications</li>
            <li>Housing applications</li>
            <li>Sponsorship applications</li>
            <li>
              Employment (Find work, volunteering, work permit, Resume and cover
              letters, etc)
            </li>
            <li>
              Referrals to family doctors, psychiatrists, lawyers, and legal
              aid, schools, LINC, and ESL/FSL; and shelters
            </li>
            <li>
              Translation and interpretation services in English, Pashto,
              Farsi/Dari, Urdu and Arabic
            </li>
          </ul>
        </Paragraph>
      </Row>
    </Layout>
  )
}

export default ImmigrationAndSettlement

export const Head = () => (
  <SEO
    title="Immigration and Settlement"
    pathname="/programs/immigration-and-settlement"
  />
)
