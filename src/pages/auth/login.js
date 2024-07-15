import { InteractionStatus } from '@azure/msal-browser'
import React, { useEffect } from 'react'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { Button, Form, Input, Result } from 'antd'
import PageHeader from '../../components/page-header'

const { Password } = Input
const { Item: FormItem } = Form
import { useIsAuthenticated, useMsal } from '@azure/msal-react'
import { loginRequest } from '../../authConfig'
import { StaticImage } from 'gatsby-plugin-image'

const { Group: ButtonGroup } = Button
export default function TestPage() {
  const { instance, inProgress } = useMsal()
  const isAuthenticated = useIsAuthenticated()

  useEffect(() => {
    const checkAuth = async() => {
      if(!isAuthenticated && inProgress === InteractionStatus.None)
        await instance.loginPopup()
    }

    checkAuth()
  }, [isAuthenticated, inProgress, instance])


  const handleLogin = async() => {

    if(inProgress === InteractionStatus.None && !isAuthenticated)
      await instance.loginPopup(loginRequest)

    return <Result title="login success" />

  }

  return (
    <Layout>
      <PageHeader title="Staff Login" />
      <Form
        onFinish={handleLogin}
        layout="vertical"
      >
        <FormItem
          hasFeedback
          validateFirst
          htmlFor="email"
          name="email"
          label="Email"
          rules={[{
            required: true,
            message: 'Please input your email!',
            pattern: /\S+@\S+\.\S+/,
            transform: (email) => email.trim(),
            whitespace: true,
          }]}
          colon={false}
        >
          <Input id="email" type="email" placeholder="example@mail.com" />
        </FormItem>

        <FormItem
          hasFeedback
          validateFirst
          htmlFor="password"
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your password!', whitespace: true, min: 16 }]}
          colon={false}
        >
          <Password id="password" allowClear />
        </FormItem>

        <ButtonGroup>
          <Button onClick={handleLogin} htmlType="button" about="sign in with microsoft" style={{ padding: 0 }}>
            <StaticImage src="../../images/microsoft/ms-symbollockup_signin_light_short.svg" alt=""
              imgStyle={{ height: '100%', width: '100%' }} layout="constrained"
              style={{ height: '100%', width: '100%' }} />
          </Button>

          <Button htmlType="submit">Login</Button>
        </ButtonGroup>
      </Form>
    </Layout>
  )
}

export const Head = () => <SEO title="login" pathname="/auth/login" />
