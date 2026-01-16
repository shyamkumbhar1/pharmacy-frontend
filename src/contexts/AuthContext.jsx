import { createContext, useContext, useState, useEffect } from 'react'
import api from '../services/api'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const response = await api.get('/user')
        setUser(response.data.user)
      } catch (error) {
        localStorage.removeItem('token')
      }
    }
    setLoading(false)
  }

  const login = async (email, password) => {
    const response = await api.post('/login', { email, password })
    localStorage.setItem('token', response.data.token)
    setUser(response.data.user)
    return response.data
  }

  const register = async (userData) => {
    const response = await api.post('/register', userData)
    localStorage.setItem('token', response.data.token)
    setUser(response.data.user)
    return response.data
  }

  const logout = async () => {
    try {
      await api.post('/logout')
    } catch (error) {
      console.error('Logout error:', error)
    }
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

