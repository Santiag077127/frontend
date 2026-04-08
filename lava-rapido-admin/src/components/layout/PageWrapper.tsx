import type { ReactNode } from 'react'
import Sidebar from './Sidebar'

interface Props { children: ReactNode }

export default function PageWrapper({ children }: Props) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1, background: '#f0f2f5', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
