import React, { useState } from 'react'
import { Typography, Form, Input, Button } from 'antd'
import SEO from '../components/seo'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'
import Success from '../components/success'
import Error from '../components/error'

const { Paragraph } = Typography
const { Item } = Form
const { TextArea } = Input

const formState = {
  IDLE: 0,
  SUBMITTING: 1,
  SUCCESS: 2,
  ERROR: 3,
}

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(formState.IDLE)

  const handleFinish = async values => {
    setFormStatus(formState.SUBMITTING)

    try {
      await fetch('/.netlify/functions/contact', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      setFormStatus(formState.SUCCESS)
    } catch (err) {
      setFormStatus(formState.ERROR)
    }
  }

  if (formStatus === formState.SUCCESS) return <Success />
  else if (formStatus === formState.ERROR) return <Error />

  return (
    <Layout>
      <PageHeader title="Contact Us" />

      <Paragraph style={{ padding: '1.5rem 1.5rem 0 1.5rem' }}>
        Thank you for using this form to leave us a message. Required fields are
        marked with *.
      </Paragraph>

      <Form
        style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}
        layout="vertical"
        size="large"
        onFinish={handleFinish}
        scrollToFirstError
        noValidate
      >
        <Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please type your full name.',
            },
          ]}
        >
          <Input type="text" placeholder="Full name" />
        </Item>

        <Item
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
          ]}
        >
          <Input type="email" placeholder="example@email.com" />
        </Item>

        <Item
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: 'Please type a brief message.',
            },
            {
              max: 3000,
              message: 'Your message cannot exceed 3000 characters.',
            },
          ]}
        >
          <TextArea rows={4} placeholder="Write your query here..." showCount />
        </Item>

        <Item style={{ paddingTop: '1rem' }}>
          <Button
            type="ghost"
            htmlType="submit"
            loading={formStatus === formState.SUBMITTING}
          >
            Submit
          </Button>
        </Item>
      </Form>
    </Layout>
  )
}

export default ContactPage

export const Head = () => <SEO title="Contact" />
