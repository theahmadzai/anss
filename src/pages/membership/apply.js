import React, { useState } from 'react'
import { graphql } from 'gatsby'
import {
  List,
  Avatar,
  Button,
  Modal,
  Form,
  Input,
  Typography,
  Divider,
} from 'antd'
import { MoneyCollectOutlined } from '@ant-design/icons'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'

const { Text } = Typography

export const query = graphql`
  query {
    allMembershipPlan(sort: { fields: price, order: DESC }) {
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
  const [selectedId, setSelectedId] = useState(null)

  const handlePurchase = id => () => {
    setSelectedId(id)
    setIsModalOpen(true)
  }

  const handleCheckout = email => {
    window.open(
      `/.netlify/functions/checkout?id=${selectedId}&email=${email}`,
      '_self'
    )
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
              <Button key={0} onClick={handlePurchase(plan.id)}>
                <MoneyCollectOutlined />
                Purchase
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={plan.images?.[0]} />}
              title={plan.title}
              description={plan.description}
            />
            <div>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: plan.currency,
              }).format(plan.price / 100)}
            </div>
          </List.Item>
        )}
      />

      <Modal
        title="Confirmation"
        open={isModalOpen}
        okText="Continue"
        onOk={form.submit}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form
          form={form}
          layout="horizontal"
          colon={false}
          onFinish={({ email }) => handleCheckout(email)}
          noValidate
        >
          <Text>
            Please enter your email address your membership confirmation and
            login details will be sent to this address.
          </Text>

          <Divider dashed />

          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              {
                required: true,
                message: 'Please type your email.',
              },
              {
                type: 'email',
                message: 'Please type a valid email.',
              },
            ]}
          >
            <Input type="email" placeholder="example@mail.com" />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  )
}

export default ApplyPage

export const Head = () => (
  <SEO title="Apply for Membership" pathname="/membership/apply" />
)
