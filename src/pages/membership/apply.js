import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { List, Avatar, Button, Modal, Form, Input, Typography, Divider } from 'antd'
import { MoneyCollectOutlined } from '@ant-design/icons'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

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
      <PageHeader title="Apply for Membership" />

      <List
        size="large"
        dataSource={plans}
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
            <List.Item.Meta
              avatar={<Avatar src={plan.images?.[0]} />}
              title={plan.title}
              description={plan.description}
            />
            <div>{getPlanPrice(plan)}</div>
          </List.Item>
        )}
      />

      <Modal
        title="Apply"
        open={isModalOpen}
        okText="Continue"
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

          <Form.Item label="Phone" name="phone">
            <Input type="tel" placeholder="+123********" />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  )
}

export default ApplyPage

export const Head = () => <SEO title="Apply for Membership" pathname="/membership/apply" />
