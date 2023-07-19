import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Input, Card, Row, Col, Typography, Avatar } from 'antd'
import SEO from '../components/seo'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'

const { Paragraph } = Typography

const toCurrency = (amount, currency) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount / 100)
}

const MemberPage = () => {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(JSON.parse(sessionStorage.getItem('LOCAL_STATE')))
  }, [])

  const handleSubmit = async values => {
    const data = await fetch('/.netlify/functions/member', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())

    sessionStorage.setItem('LOCAL_STATE', JSON.stringify(data))

    setData(data)
    setIsModalOpen(false)
  }

  return (
    <Layout>
      <PageHeader title="Member" />

      {data ? (
        <Row style={{ padding: '1.5rem' }} gutter={(24, 24)}>
          <Col span={6}>
            <Paragraph>{data.member.email}</Paragraph>

            <Card title="Membership">
              <Card.Meta
                title={data.product.name}
                avatar={<Avatar src={data.product.images?.[0]} />}
                description={toCurrency(data.product.amount, data.product.currency)}
              />
              <Paragraph style={{ marginTop: '1.5rem' }}>
                Subscription ends on&nbsp;
                {new Date(data.subscription.current_period_end * 1000).toDateString()}
              </Paragraph>
            </Card>

            <Button
              style={{ marginTop: '1.5rem' }}
              onClick={() => sessionStorage.removeItem('LOCAL_STATE')}>
              Logout
            </Button>
          </Col>
          <Col span={18}>
            <pre>{JSON.stringify(data, null, 4)}</pre>
          </Col>
        </Row>
      ) : (
        <Button onClick={() => setIsModalOpen(true)}>Login</Button>
      )}

      <Modal
        title="Authorization"
        open={isModalOpen}
        okText="Authorize"
        onOk={form.submit}
        onCancel={() => setIsModalOpen(false)}>
        <Form form={form} layout="vertical" colon={false} onFinish={handleSubmit} noValidate>
          <Form.Item
            name="id"
            label="Member ID"
            rules={[
              {
                required: true,
                message: 'Please type your member id.',
              },
            ]}>
            <Input type="text" placeholder="Member ID" />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  )
}

export default MemberPage

export const Head = () => <SEO title="Member" pathname="/member" />
