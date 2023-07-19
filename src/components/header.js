import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
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
        }}>
        <Link to="/">
          <StaticImage
            className={styles.logo}
            src="../../static/logo.png"
            alt={title}
            layout="fixed"
            placeholder="none"
          />
        </Link>

        <Search className={styles.search} />
      </div>

      <Navbar />
    </header>
  )
}

export default Header
