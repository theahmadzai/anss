import React from 'react'
import { Typography, Row } from 'antd'

const { Title } = Typography

const PageHeader = ({ title }) => {
  return (
    <Row style={{ borderBottom: '1px solid #eeeeee', padding: '1.5rem' }}>
      <Title level={1} style={{ fontSize: '1.5rem', lineHeight: 1, marginBottom: 0 }}>
        {title}
      </Title>
    </Row>
  )
}

export default PageHeader
