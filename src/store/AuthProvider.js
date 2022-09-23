import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAccessToken, getUserLogged, putAccessToken } from '../utilities/api'
import AuthContext from './AuthContext'
import PropTypes from 'prop-types'

const defaultUser = {
  userName: '',
  isLoggedIn: false
}

export default function AuthProvider ({ children }) {
  const [user, setUser] = useState(defaultUser)
  const [initializing, setInitializing] = useState(true)
  const navigate = useNavigate()

  const getCresidentials = useCallback(async () => {
    const accessToken = getAccessToken()

    if (!accessToken) {
      setInitializing(false)
      return false
    }

    let result

    try {
      const { data, error } = await getUserLogged()
      setUser({ userName: data.name, isLoggedIn: true })
      if (error) {
        throw new Error()
      }
      result = true
    } catch (err) {
      result = false
    } finally {
      setInitializing(false)
    }

    return result
  }, [])

  useEffect(() => {
    getCresidentials()
  }, [getCresidentials])

  const login = async (accessToken) => {
    putAccessToken(accessToken)
    return await getCresidentials()
  }

  const logout = () => {
    localStorage.removeItem('accessToken')
    setUser(defaultUser)
    navigate('/')
  }

  const userContext = {
    userName: user.userName,
    isLoggedIn: user.isLoggedIn,
    login,
    logout,
    initializing
  }

  return <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
