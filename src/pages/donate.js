import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../components/seo'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'
import { Row, Col, Form, Input, Button } from 'antd'

const { Item } = Form

const DONATIONS = {
  _10: 0,
  _25: 1,
  _50: 2,
  CUSTOM: 3,
}

const DonatePage = () => {
  const [form] = Form.useForm()
  const [selected, setSelected] = useState(DONATIONS._50)

  const handleFinish = ({ amount, email }) => {
    window.open(
      `/.netlify/functions/donate?amount=${amount * 100}&email=${email}`,
      '_self'
    )
  }

  const selectedStyles = {
    border: '1px solid var(--primary-color)',
    borderRadius: 3,
  }

  return (
    <Layout>
      <PageHeader title="Donate" />

      <Row style={{ padding: '1.5rem' }} gutter={32}>
        <Col span={24} md={12}>
          <StaticImage
            src="../../images/donate.jpg"
            alt="Donate"
            placeholder="blurred"
          />
        </Col>

        <Col span={24} md={12}>
          <Form
            form={form}
            layout="vertical"
            size="large"
            onFinish={handleFinish}
            noValidate
          >
            <Row gutter={[24, 24]}>
              <Col
                span={8}
                onClick={() => {
                  setSelected(DONATIONS._10)
                  form.setFieldValue('amount', 10)
                }}
              >
                <Input
                  style={selected === DONATIONS._10 ? selectedStyles : {}}
                  addonBefore="CA$"
                  value={10}
                  disabled={true}
                  maxLength={16}
                />
              </Col>

              <Col
                span={8}
                onClick={() => {
                  setSelected(DONATIONS._25)
                  form.setFieldValue('amount', 25)
                }}
              >
                <Input
                  style={selected === DONATIONS._25 ? selectedStyles : {}}
                  addonBefore="CA$"
                  value={25}
                  disabled={true}
                  maxLength={16}
                />
              </Col>

              <Col
                span={8}
                onClick={() => {
                  setSelected(DONATIONS._50)
                  form.setFieldValue('amount', 50)
                }}
              >
                <Input
                  style={selected === DONATIONS._50 ? selectedStyles : {}}
                  addonBefore="CA$"
                  value={50}
                  disabled={true}
                  maxLength={16}
                />
              </Col>

              <Col span={24} onClick={() => setSelected(DONATIONS.CUSTOM)}>
                <Item
                  name="amount"
                  initialValue={50}
                  rules={[
                    {
                      type: 'number',
                      transform: v => Number(v),
                      required: true,
                      min: 1,
                      message: 'Please enter a positive number',
                    },
                  ]}
                >
                  <Input
                    style={selected === DONATIONS.CUSTOM ? selectedStyles : {}}
                    type="number"
                    placeholder="Other amount"
                    addonBefore="CA$"
                    maxLength={16}
                  />
                </Item>
              </Col>
            </Row>

            <Item
              name="email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please type a valid email.',
                },
              ]}
            >
              <Input type="email" placeholder="Email address" />
            </Item>

            <Button type="primary" htmlType="submit">
              Donate
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  )
}

export default DonatePage

export const Head = () => <SEO title="Donate" pathname="/donate" />
