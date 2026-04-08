import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import type { ReactNode } from 'react'

import LoginPage      from '../features/auth/LoginPage'
import DashboardPage  from '../features/dashboard/DashboardPage'
import ServicesPage   from '../features/services/pages/ServicesPage'
import OperationsPage from '../features/operations/pages/OperationsPage'
import PageWrapper    from '../components/layout/PageWrapper'

// Ruta protegida: redirige a /login si no hay sesión
function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = useAppSelector((s) => s.auth.token)
  if (!token) return <Navigate to="/login" replace />
  return <PageWrapper>{children}</PageWrapper>
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={
          <ProtectedRoute><DashboardPage /></ProtectedRoute>
        } />

        <Route path="/services" element={
          <ProtectedRoute><ServicesPage /></ProtectedRoute>
        } />

        <Route path="/operations" element={
          <ProtectedRoute><OperationsPage /></ProtectedRoute>
        } />

        {/* Cualquier ruta desconocida redirige al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
