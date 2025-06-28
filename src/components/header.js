// export default Header
import React, { useState, useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import useSiteMetadata from '../hooks/use-sitemetadata'
import Navbar from './navbar'
import Search from './search'
import { readToken, removeToken } from '../lib/authenticate'
import { LogOut, UserRound, ChevronDown } from 'lucide-react'

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
      const currentToken = readToken();
      setToken(currentToken);
    } catch (error) {
      console.error('Error checking auth status:', error)
      setToken(null)
    }
  }
  
  const logout = () => {
    removeToken()
    setUserDropdownOpen(false)
    navigate("/")
  }

  return (
    <header className="relative border-b border-[#27458d] w-full bg-white shadow-md">      {/* Logo and Auth Section */}
      <div className="w-full max-w-7xl mx-auto p-4 flex flex-col lg:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <StaticImage
            src="../../static/logo.png"
            alt={title}
            layout="fixed"
            placeholder="none"
            className="w-12 h-12 object-contain"
          />
        </Link>

        {/* Spacer for small screens */}
        <div className="flex-1" />

          {/* Auth Buttons or User Info */}
          <div className="flex items-center space-x-3">
            {!token ? (
              <>
                <Link
                  to="/register"
                  className="px-4 py-1.5 rounded-md font-medium text-sm transition-all duration-200
                    bg-[#27458d] text-white hover:bg-[#1d3876] shadow-sm hover:shadow-md
                    transform hover:-translate-y-0.5"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-1.5 rounded-md font-medium text-sm transition-all duration-200
                    border border-[#27458d] text-[#27458d] hover:bg-[#f5f8ff]
                    transform hover:-translate-y-0.5"
                >
                  Sign In
                </Link>
              </>
            ) : (
              <div className="relative min-w-64">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex w-40 items-center mx-auto space-x-2 group px-3 py-1.5 rounded-lg bg-blue-200 text-white hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-[#27458d] text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <UserRound className="w-4 h-4" />
                  </div>
                  <div className="hidden sm:block text-left max-w-[120px] truncate">
                    <p className="text-sm font-medium text-gray-800 truncate">{token.userName}</p>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 text-gray-500 transition-transform ${userDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {userDropdownOpen && (
                  <div className="absolute mt-2 mx-auto w-48 rounded-lg shadow-lg bg-white ring-1 ring-gray-200 z-50 overflow-hidden">
                    <div className="py-1">
                      <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
                        Signed in as
                        <div className="font-medium text-gray-800 truncate">{token.userName}</div>
                      </div>
                      <Link
                        to="/profile"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-400 hover:text-white transition-colors"
                        onClick={() => setUserDropdownOpen(false)}
                      >
                        My Profile
                      </Link>
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-red-200 hover:text-red-600 flex items-center transition-colors border-t border-gray-100"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      {/* Search bar */}
      <div className="lg:absolute lg:right-[10rem] lg:top-24 min-w-[25rem] flex relative mt-4 lg:mt-2">
        <div className="w-full max-w-md">
          <Search className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#27458d]" />
        </div>
      </div>

      <div className="border-t border-gray-100 mt-4 space-x-4">
        <Navbar />
      </div>

    </header>
  )
}

export default Header