import React, { useState, useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import useSiteMetadata from '../hooks/use-sitemetadata'
import Navbar from './navbar'
import Search from './search'
import { readToken, removeToken } from '../lib/authenticate'
import { LogOut, UserRound, ChevronDown } from 'lucide-react'
import * as styles from './header.module.less'

const Header = () => {
  const { title } = useSiteMetadata()
  const [token, setToken] = useState(null)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)

  useEffect(() => {
    checkAuthStatus()

    const handleStorageChange = () => {
      checkAuthStatus()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('authStatusChanged', checkAuthStatus)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('authStatusChanged', checkAuthStatus)
    }
  }, [])

  const checkAuthStatus = () => {
    try {
      const currentToken = readToken()
      setToken(currentToken)
    } catch (error) {
      console.error('Error checking auth status:', error)
      setToken(null)
    }
  }

  const logout = () => {
    removeToken()
    setUserDropdownOpen(false)
    navigate('/')
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <StaticImage
            src="../../static/logo.png"
            alt={title}
            layout="fixed"
            placeholder="none"
            className={styles.logoImage}
          />
        </Link>

        <div className="flex-1" />

        <div className={styles.authWrapper}>
          {!token ? (
            <div className={styles.authButtons}>
              <Link to="/register" className={styles.signupButton}>Sign Up</Link>
              <Link to="/login" className={styles.signinButton}>Sign In</Link>
            </div>
          ) : (
            <div className={styles.userDropdownWrapper}>
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className={styles.userButton}
              >
                <div className={styles.userIcon}><UserRound className="w-4 h-4" /></div>
                <div className={styles.userName}><p>{token.userName}</p></div>
                <ChevronDown className={`${styles.chevron} ${userDropdownOpen ? styles.rotate : ''}`} />
              </button>

              {userDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownHeader}>
                    Signed in as
                    <div className={styles.dropdownUsername}>{token.userName}</div>
                  </div>
                  <Link to="/profile" className={styles.dropdownItem} onClick={() => setUserDropdownOpen(false)}>
                    My Profile
                  </Link>
                  <button onClick={logout} className={styles.signoutButton}>
                    <LogOut className="w-4 h-4 mr-2" /> Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className={styles.searchWrapper}>
        <div className={styles.searchBox}>
          <Search className={styles.searchInput} />
        </div>
      </div>

      <div className={styles.navWrapper}>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
