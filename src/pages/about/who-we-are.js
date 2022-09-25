import React from 'react'
import { Row, Col, Typography } from 'antd'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Paragraph } = Typography

const WhoWeArePage = () => {
  return (
    <Layout>
      <PageHeader title="Who we are" />

      <Row gutter={24} style={{ padding: '1.5rem' }}>
        <Col span={24} md={12}>
          <Paragraph align="justify">
            ANSS Foundation established by a team of professional Afghans in
            Toronto, Canada and is a non-political, non-profit and an impartial
            organization, established in 2017. The purpose of ANSS Foundation is
            to support utilizing full potential of educated and professional
            individuals, and enable them contribute to the development of
            communities concerned.
          </Paragraph>

          <Paragraph align="justify">
            It provides support and assistance to newcomers from diverse
            backgrounds as well as social services to the communities. ANSS’s
            main office is in Toronto City, Ontario, Canada and it aims to
            expand its outreach to other concerned communities.
          </Paragraph>
        </Col>

        <Col span={24} md={12}>
          <StaticImage
            src="../../images/who-we-are.jpg"
            alt="Who we are"
            placeholder="blurred"
          />
        </Col>
      </Row>
    </Layout>
  )
}

export default WhoWeArePage

export const Head = () => <SEO title="Who we are" pathname="/who-we-are" />
