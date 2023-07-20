import React from 'react'
import { FloatButton } from 'antd'
import Header from './header'
import Footer from './footer'
import * as styles from './layout.module.less'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatButton.BackTop />
    </div>
  )
}

export default Layout
