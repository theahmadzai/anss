import React, { useState, useEffect } from 'react'
import { readToken } from '../lib/authenticate'
import { getUserDatabyID } from '../lib/userData'
import { Mail, Calendar, UserCheck, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const themeColor = '#27458d'

function UserCard({ userId: propUserId }) {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(null)
  const [userId, setUserID] = useState(propUserId || '')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    checkAuthStatus()

    const handleStorageChange = () => checkAuthStatus()

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('authStatusChanged', checkAuthStatus)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('authStatusChanged', checkAuthStatus)
    }
  }, [])

  useEffect(() => {
    if (userId) {
      getUserData()
    }
  }, [userId])

  const checkAuthStatus = () => {
    try {
      const currentToken = readToken()
      setToken(currentToken)
      if (!propUserId && currentToken?._id) {
        setUserID(currentToken._id)
      }
    } catch (error) {
      console.error('Auth check error:', error)
      setToken(null)
      setError('Authentication error')
    }
  }

  const getUserData = async () => {
    if (!userId) {
      setError('No user ID available')
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      setError(null)
      const response = await getUserDatabyID(userId)
      const result = await response.json()
      if (result.success) setUserData(result.data)
      else setError(result.message || 'Failed to fetch user data')
    } catch (error) {
      console.error('User fetch error:', error)
      setError('Failed to load user data')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (str) => {
    if (!str) return 'N/A'
    const d = new Date(str)
    return d.toLocaleDateString()
  }

  const getInitials = (first, last) =>
    `${first?.[0]?.toUpperCase() || ''}${last?.[0]?.toUpperCase() || ''}` || '?'

  if (loading) {
    return (
      <motion.div
        className="max-w-xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-6 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-3 bg-gray-300 rounded w-1/2" />
          </div>
        </div>
      </motion.div>
    )
  }

  if (error) {
    return (
      <motion.div
        className="max-w-xl mx-auto bg-white rounded-xl shadow-lg border border-red-300 p-6 text-center"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">Error Loading User</h3>
        <p className="text-sm text-red-600 mb-4">{error}</p>
        <button
          onClick={getUserData}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Try Again
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div
        className="px-6 py-5"
        style={{ background: `linear-gradient(90deg, ${themeColor}, #4567c9)` }}
      >
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center border-2 border-white text-white text-xl font-bold">
            {getInitials(userData.firstName, userData.lastName)}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">
              {userData.firstName} {userData.lastName}
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Info Row */}
        {[
          {
            label: 'Email',
            value: userData.email,
            icon: Mail,
            bg: 'bg-blue-50',
            iconColor: 'text-blue-600',
          },
          {
            label: 'Username',
            value: userData.userName,
            icon: UserCheck,
            bg: 'bg-green-50',
            iconColor: 'text-green-600',
          },
          {
            label: 'Member Since',
            value: formatDate(userData.createdAt),
            icon: Calendar,
            bg: 'bg-purple-50',
            iconColor: 'text-purple-600',
          },
        ].map((item, i) => (
          <div className="flex items-center space-x-4 group" key={i}>
            <div
              className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center group-hover:scale-105 transition`}
            >
              <item.icon className={`w-6 h-6 ${item.iconColor}`} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase font-semibold">{item.label}</p>
              <p className="text-sm font-medium text-gray-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          Connected securely | <span className="text-[##27458d] font-semibold"> ANSS User</span>
        </p>
      </div>
    </motion.div>
  )
}

export default UserCard
