import React from 'react'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'
import { Col, Card, Row } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

const benefitsData = [
  {
    title: 'Bronze',
    benefit: {
      benefit1: 'this is our first benefit for Bronze',
      benefit2: 'this is our second benefit for Bronze',
    },
  },
  {
    title: 'Silver',
    benefit: {
      benefit1: 'this is our first benefit for Gold',
      benefit2: 'this is our second benefit for Gold',
    },
  },
  {
    title: 'Gold',
    benefit: {
      benefit1: 'this is our first benefit for Gold',
      benefit2: 'this is our second benefit for Gold',
    },
  },
  {
    title: 'Platinum',
    benefit: {
      benefit1: 'this is our first benefit for Gold',
      benefit3: 'this is our second benefit for Gold',
      benefit4: 'this is our first benefit for Gold',
      benefit5: 'this is our second benefit for Gold',
      benefit6: 'this is our first benefit for Gold',
      benefit7: 'this is our second benefit for Gold',
    },
  },
]

const BenefitsPage = () => {
  return (
    <Layout>
      <PageHeader title="Membership Benefits" />
      <Row gutter={6} justify="space-evenly">
        {benefitsData.map((item, index) => (
          <Col key={index} lg={6} md={12} sm={24}>
            <Card title={item.title}>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {Object.values(item.benefit).map((value, i) => (
                  <li key={i} style={{ padding: '4px' }}>
                    <CheckOutlined color="green" /> {value}
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export default BenefitsPage

export const Head = () => <SEO title="Membership Benefits" pathname="/membership/benefits" />
