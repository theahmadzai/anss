import React from 'react'
import { FloatButton } from 'antd'
import Header from './header'
import Footer from './footer'
import * as styles from './layout.module.less'

const Layout = ({ children, ...props }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.topLine} />
      <Header />
      <main {...props}>{children}</main>
      <Footer />
      <FloatButton.BackTop />
    </div>
  )
}

export default Layout
