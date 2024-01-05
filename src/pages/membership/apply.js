import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { List, Avatar, Button, Modal, Form, Input, Typography, Divider,Row, Col } from 'antd'
import { MoneyCollectOutlined } from '@ant-design/icons'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './apply.module.less'

const getPlanPrice = plan =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: plan.currency,
  }).format(plan.price / 100)

const { Paragraph } = Typography

export const query = graphql`
  query {
    allMembershipPlan(sort: { price: DESC }) {
      nodes {
        id
        price
        currency
        title
        description
        images
      }
    }
  }
`

const ApplyPage = ({
  data: {
    allMembershipPlan: { nodes: plans },
  },
}) => {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const p = {}

  plans.forEach(plan => {
    p[plan.title] = p[plan.title] || []
    p[plan.title].push(plan)
  })

  const handleFinish = async values => {
    try {
      await fetch('/.netlify/functions/apply-membership', {
        method: 'POST',
        body: JSON.stringify({
          plan: selectedPlan.title,
          price: getPlanPrice(selectedPlan),
          ...values,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setIsModalOpen(false)
      form.resetFields()
    } catch (err) {
      //
    }
  }

  return (
    <Layout>
      <PageHeader title="Apply For Membership" />
<Row style={{padding:'1rem'}}>
  <Col span={24} md={12}>
  {/* <h1 className={styles.title}>Membership Wonderland</h1> */}
  <Paragraph className={styles.membershipDetails}>
  Our social and resettlement services are provided free of charge to eligible individuals, without discrimination. Membership with ANSS Foundation is designed for recognition and community contribution, supporting the sustainability of our key services.
  </Paragraph>
  <Paragraph className={styles.membershipDetails}>
  Our membership system, integrated into the ANSS website, offers 1–3 year recurring memberships (automatically renewed) and one-time Lifetime memberships. The system provides timely reminders for membership renewal and expiration.
  </Paragraph>
  <Paragraph className={styles.membershipDetails}>To ensure transparency, a dedicated bank account and bookkeeping system will be established for all membership revenue. Quarterly consolidation and reporting, along with inclusion in the annual audit, guarantee financial accountability.</Paragraph>
  </Col>
  
  <Col span={24} md={12}>
  <StaticImage src='../../images/joinus.png' alt='Joinus' placeholder='Join us gif'/>
  </Col>
</Row>
       
      {Object.entries(p).map(([key, value], index) => (
        <List
          header={<h2 style={{textAlign:'center',backgroundColor:'#3459a6',fontSize:'28px',fontWeight:'600',color:'white',padding:'8px',}}>{key}</h2>}
          key={index.toString()}
          size="large"
          dataSource={value}
          renderItem={plan => (
            <List.Item
              key={plan.id}
              actions={[
                <Button
                  key={0}
                  onClick={() => {
                    setSelectedPlan(plan)
                    setIsModalOpen(true)
                  }}>
                  <MoneyCollectOutlined />
                  Purchase
                </Button>,
              ]}>
              <List.Item.Meta avatar={<Avatar src={plan.images?.[0]} />} title={plan.description} />
              <div>{getPlanPrice(plan)}</div>
            </List.Item>
          )}
        />
      ))}

      <Modal
        title="Apply"
        open={isModalOpen}
        okText="Submit"
        onOk={form.submit}
        onCancel={() => setIsModalOpen(false)}>
        <Form form={form} layout="vertical" onFinish={handleFinish} noValidate>
          <Paragraph>
            Please fill in all the details below. Your membership application will be reviewed and
            you will be notified via the given email as soon as possible.
          </Paragraph>

          <Divider />

          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please type your full name.',
              },
            ]}>
            <Input type="text" placeholder="Full name" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please type your email.',
              },
              {
                type: 'email',
                message: 'Please type a valid email.',
              },
            ]}>
            <Input type="email" placeholder="example@mail.com" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please type your full name.',
              },
            ]}>
            <Input type="tel" placeholder="+123********" />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  )
}

export default ApplyPage

export const Head = () => <SEO title="Apply for Membership" pathname="/membership/apply" />
