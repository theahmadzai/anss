import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import useSiteMetadata from '../hooks/use-sitemetadata'
import * as styles from './navbar.module.less'

const NavLink = ({ href, children }) => {
  return (
    <Link to={href} className={styles.link} activeClassName={styles.active}>
      {children}
    </Link>
  )
}

const NavLinks = props => (
  <nav {...props}>
    <NavLink href="/">Home</NavLink>
    <div className={styles.subNav}>
      <NavLink href="/about/who-we-are">About</NavLink>
      <div className={styles.subNavItems}>
        <NavLink href="/about/who-we-are">Who we are</NavLink>
        <NavLink href="/about/executive-management">
          Executive Management
        </NavLink>
        <NavLink href="/about/board-of-directors">Board of Directors</NavLink>
        <NavLink href="/about/board-of-trustees">Board of Trustees</NavLink>
      </div>
    </div>
    <div className={styles.subNav}>
      <NavLink href="/programs/immigration-and-settlement">Programs</NavLink>
      <div className={styles.subNavItems}>
        <NavLink href="/programs/immigration-and-settlement">
          Immigration and Settlement
        </NavLink>
        <NavLink href="/programs/cultural-environmental-and-educational">
          Cultural, Environmental &amp; Educational
        </NavLink>
        <NavLink href="/programs/networking-and-community-based-research">
          Networking &amp; Community Based Research
        </NavLink>
      </div>
    </div>
    <NavLink href="/membership">Membership</NavLink>
    <NavLink href="/events">Events</NavLink>
    <NavLink href="/news">Latest News</NavLink>
    <NavLink href="/appointments">Appointments</NavLink>
    <NavLink href="/contact">Contact</NavLink>
    <NavLink href="/donate">Donate</NavLink>
  </nav>
)

const Navbar = () => {
  const { name } = useSiteMetadata()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <NavLinks className={styles.navDesktop} />

      <MenuOutlined
        className={styles.toggleNav}
        onClick={() => setIsOpen(true)}
      />

      <Drawer
        title={name}
        open={isOpen}
        closeable={false}
        onClose={() => setIsOpen(false)}
      >
        <NavLinks className={styles.navMobile} />
      </Drawer>
    </nav>
  )
}

export default Navbar
