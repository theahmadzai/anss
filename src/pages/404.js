import React from 'react'
import { Result, Button } from 'antd'
import SEO from '../components/seo'
import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => window.history.back()}>
            Go Back
          </Button>
        }
      />
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <SEO title="Not Found" pathname="/404" />
