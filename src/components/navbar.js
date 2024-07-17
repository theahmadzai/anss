import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import React, { useState } from "react";
import { Link } from "gatsby";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import useSiteMetadata from "../hooks/use-sitemetadata";
import * as styles from "./navbar.module.less";



const NavLink = ({ href, children }) => {
  return (
    <Link to={href} className={styles.link} activeClassName={styles.active}>
      {children}
    </Link>
  );
};

const NavLinks = props => {
  const activeAccount = useMsal().instance.getActiveAccount();

  return (

    <nav {...props}>
      <NavLink href="/">Home</NavLink>
      <div className={styles.subNav}>
        <NavLink href="/about/who-we-are">About</NavLink>
        <div className={styles.subNavItems}>
          <NavLink href="/about/who-we-are">Who we are</NavLink>
          <NavLink href="/about/executive-management">Executive Management</NavLink>
          <NavLink href="/about/board-of-directors">Board of Directors</NavLink>
          <NavLink href="/about/board-of-trustees">Board of Trustees</NavLink>
        </div>
      </div>
      <div className={styles.subNav}>
        <NavLink href="/programs/refugee-sponsorship">Programs</NavLink>
        <div className={styles.subNavItems}>
          <NavLink href="/programs/refugee-sponsorship">Refugee Sponsorship</NavLink>
          <NavLink href="/programs/settlement-services">Settlement Services</NavLink>
          <NavLink href="/programs/social-services">Social Services</NavLink>
          <NavLink href="/programs/cultural-programs">Cultural Programs</NavLink>
        </div>
      </div>
      <div className={styles.subNav}>
        <NavLink href="/membership/benefits">Membership</NavLink>
        <div className={styles.subNavItems}>
          <NavLink href="/membership/benefits">Membership Benefits</NavLink>
          <NavLink href="/membership/apply">Apply for Membership</NavLink>
          <NavLink href="/membership/members">Current Members</NavLink>
        </div>
      </div>
      <NavLink href="/events">Events</NavLink>
      <NavLink href="/news">News</NavLink>
      <NavLink href="/appointments">Appointments</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <NavLink href="/donate">Donate</NavLink>

      {/* navbar links to indicate their signed in status */}
      {props.className === styles.navMobile ? <hr /> : null}

      {/*todo: align with style - fit onto screen width*/}
      <UnauthenticatedTemplate>
        <NavLink href="/member/login">Login</NavLink>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <NavLink href="/member/profile">{activeAccount?.username}</NavLink>
        <NavLink href="/member/logout">Logout</NavLink>
      </AuthenticatedTemplate>
    </nav>
  );
};

const Navbar = () => {
  const { name } = useSiteMetadata();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <NavLinks className={styles.navDesktop} />

      <MenuOutlined className={styles.toggleNav} onClick={() => setIsOpen(true)} />

      <Drawer title={name} open={isOpen} closeable={false} onClose={() => setIsOpen(false)}>
        <NavLinks className={styles.navMobile} />
      </Drawer>
    </nav>
  );
};

export default Navbar;
