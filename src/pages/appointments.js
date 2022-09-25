import React, { useState } from 'react'
import { Form, Row, Col, Input, Select, Button, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import SEO from '../components/seo'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'
import Success from '../components/success'
import Error from '../components/error'

const { Item } = Form
const { TextArea } = Input
const { Option } = Select

const formState = {
  IDLE: 0,
  SUBMITTING: 1,
  SUCCESS: 2,
  ERROR: 3,
}

const AppointmentsPage = () => {
  const [formStatus, setFormStatus] = useState(formState.IDLE)
  const [fileList, setFileList] = useState([])

  const onAttachmentsUploaded = ({ fileList }) => {
    setFileList(fileList)
  }

  const handleFinish = async values => {
    setFormStatus(formState.SUBMITTING)

    const formData = new FormData()

    Object.entries(values).forEach(([k, v]) => formData.append(k, v))
    fileList.forEach(file => formData.append('files', file.originFileObj))

    try {
      await fetch('/.netlify/functions/book-appointment', {
        method: 'POST',
        body: formData,
      })

      setFormStatus(formState.SUCCESS)
    } catch (error) {
      setFormStatus(formState.ERROR)
    }
  }

  if (formStatus === formState.SUCCESS) return <Success />
  else if (formStatus === formState.ERROR) return <Error />

  return (
    <Layout>
      <PageHeader title="Book an Appointment" />

      <Form
        style={{ padding: '1.5rem' }}
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

        <Row gutter={32}>
          <Col span={24} md={12}>
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
          </Col>

          <Col span={24} md={12}>
            <Item label="Phone" name="phone">
              <Input type="tel" placeholder="+123********" />
            </Item>
          </Col>
        </Row>

        <Row gutter={32}>
          <Col span={24} md={12}>
            <Item
              label="Date"
              name="date"
              rules={[
                {
                  required: true,
                  message: 'Please choose a date.',
                },
              ]}
            >
              <Input type="date" />
            </Item>
          </Col>

          <Col span={24} md={12}>
            <Item
              label="Category"
              name="category"
              rules={[
                {
                  required: true,
                  message: 'Please select a category.',
                },
              ]}
            >
              <Select>
                <Option value="General">General</Option>
                <Option value="Settlement">Settlement</Option>
                <Option value="Employment">Employment</Option>
                <Option value="Referrals">Referrals</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Item>
          </Col>
        </Row>

        <Item
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: 'Please type your query.',
            },
          ]}
        >
          <TextArea rows={4} placeholder="Write your query here..." showCount />
        </Item>

        <Item style={{ paddingTop: '1rem' }}>
          <Upload
            name="attachments"
            listType="picture-card"
            fileList={fileList}
            onChange={onAttachmentsUploaded}
            onPreview={() => void 0}
            customRequest={({ onSuccess, file }) => {
              setTimeout(() => {
                onSuccess(file)
              }, 0)
            }}
            multiple
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Item>

        <Item>
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

export default AppointmentsPage

export const Head = () => <SEO title="Appointments" pathname="/appointments" />
