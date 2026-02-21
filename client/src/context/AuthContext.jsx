import React, { createContext, useState, useContext, useEffect } from 'react'
import api from '../services/api'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // Simple user fetch placeholder
      api.get('/auth/me').then(res => setUser(res.data)).catch(() => {})
    }
  }, [])

  const login = async (credentials) => {
    const res = await api.post('/auth/login', credentials)
    localStorage.setItem('token', res.data.token)
    api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`
    setUser(res.data.user)
    return res.data
  }

  const logout = () => {
    localStorage.removeItem('token')
    delete api.defaults.headers.common.Authorization
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
