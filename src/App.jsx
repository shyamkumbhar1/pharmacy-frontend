import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Medicines from './pages/Medicines'
import BarcodeEntries from './pages/BarcodeEntries'
import StockAlerts from './pages/StockAlerts'
import Subscriptions from './pages/Subscriptions'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminSubscriptions from './pages/admin/AdminSubscriptions'
import Layout from './components/layout/Layout'

function PrivateRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return user ? children : <Navigate to="/login" />
}

function AdminRoute({ children }) {
  const { user } = useAuth()
  return user?.role === 'admin' ? children : <Navigate to="/dashboard" />
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="medicines" element={<Medicines />} />
        <Route path="barcode-entries" element={<BarcodeEntries />} />
        <Route path="stock-alerts" element={<StockAlerts />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        
        <Route path="admin" element={<AdminRoute><></></AdminRoute>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="subscriptions" element={<AdminSubscriptions />} />
        </Route>
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  )
}

export default App

