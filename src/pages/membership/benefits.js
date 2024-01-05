import React from 'react'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'
import { Col, Card, Row,Button } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import Title from 'antd/es/skeleton/Title'
import * as styles from './benefits.module.less'

const benefitsData = [
  {
    title: 'Platinum',
    benefit: [
      'Subscription to ANSS email listserv (mailing lists)',
      'Access to ANSS What’s Up groups',
      'Access to the online membership portal on the ANSS website',
      'Right to vote at General Assembly meetings',
      'One-time welcome message with a member photo on ANSS website news, Facebook & Instagram',
      'Right to be nominated for the Board of Trustees',
      'Access to community sponsorship programs',
      'Annual recognition of membership on the ANSS Foundation website news, Facebook, Instagram, Twitter, and LinkedIn',
      'Your name, 100-word bio, picture, and LinkedIn profile link will be featured on the GOLD members page of the ANSS Foundation website',
      'Reserved GOLD Members Seats at our seated events, when RSVPed*',
      'Featured ANSS Interview to highlight member profile/business and social activity on YouTube Channel',
      'Exclusive access to ANSS Foundation exhibition opportunities'
    ]
  },
  {
    title: 'Gold',
    benefit: [
      'Subscription to ANSS email listserv (mailing lists)',
      'Access to ANSS What’s Up groups',
      'Access to the online membership portal on the ANSS website',
      'Right to vote at General Assembly meetings',
      'One-time welcome message with a member photo on ANSS website news, Facebook & Instagram',
      'Right to be nominated for the Board of Trustees',
      'Access to community sponsorship programs',
      'Annual recognition of membership on the ANSS Foundation website news, Facebook, Instagram, Twitter, and LinkedIn',
      'Your name, 100-word bio, picture, and LinkedIn profile link will be featured on the GOLD members page of the ANSS Foundation website',
      'Reserved GOLD Members Seats at our seated events, when RSVPed*'
    ]
  },
  {
    title: 'Silver',
    benefit: [
      'Subscription to ANSS email listserv (mailing lists)',
      'Access to ANSS What’s Up groups',
      'Access to the online membership portal on the ANSS website',
      'Right to vote at General Assembly meetings',
      'One-time welcome message with member photo on ANSS website news, Facebook & Instagram',
      'Get the right to be nominated for the Board of Trustees'
    ]
  },
  {
    title: 'Bronze',
    benefit: [
      'Subscription to ANSS email listserv (mailing lists)',
  'Access to ANSS What’s Up groups',
  'Access to the online membership portal on the ANSS website',
  'Right to vote at General Assembly meetings'
    ]
  },
 
 
 
]

const BenefitsPage = () => {

  const planTitle = () => {
    return (
      <div>
        {benefitsData.map((item, index) => (
          <Title key={index}>{item.title}</Title>
        ))}
      </div>
    );
  };
  
  
  return (
    <Layout>
      <PageHeader title="Membership Benefits" />
      <Row gutter={12} justify="space-evenly">
        {benefitsData.map((item, index) => (
          <Col key={index} lg={24} md={24} sm={24}>
            <Card title={<p className={styles.cardTitle}>{item.title}</p>} size='default' className={styles.card}>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {Object.values(item.benefit).map((value, i) => (
                  <li key={i} className={styles.benefitList}>
                    <CheckCircleFilled className={styles.checkIcon} /> {value}
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
