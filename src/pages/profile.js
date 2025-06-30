import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import SEO from '../components/seo'


export default function UserProfile() {
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = () => {
    try {
      const currentToken = readToken()
      if (!currentToken) {
        // Redirect to login if no token
        navigate('/login')
        return
      }
      setToken(currentToken)
    } catch (error) {
      console.error('Auth check failed:', error)
      navigate('/login')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!token) {
    return null
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">User Profile</h1>
            <p className="text-gray-600">Manage your account information</p>
          </div>
          
          <UserCard userId={token._id} />
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <SEO title="ANSS User Profile" pathname="/profile" />;