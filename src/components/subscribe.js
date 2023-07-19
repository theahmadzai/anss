import React from 'react'
import { Form, Input, Button } from 'antd'

const { Item } = Form

const Subscribe = () => {
  const handleFinish = ({ email }) => {
    window.open(`/.netlify/functions/subscribe?email=${email}`, '_blank')
  }

  return (
    <Form layout="vertical" onFinish={handleFinish} noValidate>
      <Item
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
      </Item>

      <Item>
        <Button type="primary" htmlType="submit">
          Subscribe
        </Button>
      </Item>
    </Form>
  )
}

export default Subscribe
