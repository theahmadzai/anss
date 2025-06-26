import React from 'react'
import { Link } from 'gatsby'
import { Typography, Row, Col, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import SEO from '../components/seo'
import Layout from '../components/layout'

const { Title, Paragraph } = Typography

const IndexPage = () => {
  return (
    <Layout>
      <div className="wavesWrapper">
        <div className="waves">
          <svg viewBox="0 0 800 600">
            <path
              d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
              fill="#27458D"></path>
            <path
              d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
              fill="#3459a6"></path>
            <path
              d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
              fill="#27458D"></path>
          </svg>
        </div>
      </div>

      <div style={{ overflow: 'hidden' }}>
        <Row style={{ padding: '1.5rem 3rem' }} gutter={[48, 48]}>
          <Col span={24} sm={12} md={8}>
            <div className="homeCard">
              <h2>Vision</h2>
              <p>Prosperous, connected and self-reliant communities</p>
            </div>
          </Col>

          <Col span={24} sm={12} md={8}>
            <div className="homeCard">
              <h2>Mission</h2>
              <p>To provide quality social services for concerned communities</p>
            </div>
          </Col>

          <Col span={24} sm={12} md={8}>
            <div className="homeCard">
              <h2>Core Values</h2>
              <ul>
                <li>Integrity</li>
                <li>Transparency</li>
                <li>Professionalism</li>
                <li>Diversity</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div
        style={{
          background: '#FAFAFA',
          height: '200px',
          margin: '1.5rem 0',
          border: '1px solid #F0F0F0',
          display: 'flex',
          alignItems: 'center',
        }}>
        <Link to="/membership/applyMembership" style={{ display: 'block', margin: '0 auto' }}>
          <Button type="primary" shape="round" size="large" icon={<UserOutlined />}>
            Become our Member
          </Button>
        </Link>
      </div>

      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Title level={2}>Welcome to ANSS</Title>
        <Paragraph style={{ fontSize: '1.1rem' }}>
          We're currently updating our website to provide you with better services. 
          Our membership system is fully functional and ready for new applications.
        </Paragraph>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO title="Home" />
