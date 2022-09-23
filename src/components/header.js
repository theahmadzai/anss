import React from 'react'
import { Link } from 'gatsby'
import { Image } from 'antd'
import useSiteMetadata from '../hooks/use-sitemetadata'
import * as styles from './header.module.less'
import Navbar from './navbar'
import Search from './search'

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header className={styles.header}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/">
          <Image
            src="/logo.png"
            height="108px"
            width="178.81px"
            alt={title}
            preview={false}
            className={styles.logo}
          />
        </Link>

        <Search className={styles.search} />
      </div>

      <Navbar />
    </header>
  )
}

export default Header
