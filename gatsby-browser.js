import React from 'react'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import './src/styles/global.less'

export const wrapRootElement = ({ element }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#27458D',
          fontSize: 16,
          fontFamily: 'Open Sans',
          borderRadius: 0,
        },
      }}>
      {element}
    </ConfigProvider>
  )
}
