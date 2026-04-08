import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { logout } from '../../features/auth/authSlice'

const NAV_ITEMS = [
  { to: '/',            icon: '📊', label: 'Dashboard'   },
  { to: '/services',   icon: '🚗', label: 'Servicios'   },
  { to: '/operations', icon: '🔄', label: 'Operaciones' },
]

export default function Sidebar() {
  const dispatch = useAppDispatch()
  const user     = useAppSelector((s) => s.auth.user)

  return (
    <aside style={styles.sidebar}>
      <div style={styles.brand}>
        <span style={{ fontSize: 28 }}>🚗</span>
        <div>
          <p style={styles.brandName}>Lava Rápido</p>
          <p style={styles.brandSub}>Admin Panel</p>
        </div>
      </div>

      <nav style={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            style={({ isActive }) => ({
              ...styles.navItem,
              background: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
              fontWeight: isActive ? 700 : 400,
            })}
          >
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div style={styles.footer}>
        <p style={styles.userName}>{user?.nombre ?? 'Administrador'}</p>
        <p style={styles.userEmail}>{user?.correo ?? ''}</p>
        <button style={styles.logoutBtn} onClick={() => dispatch(logout())}>
          Cerrar sesión
        </button>
      </div>
    </aside>
  )
}

const styles: Record<string, React.CSSProperties> = {
  sidebar:   { width: 240, minHeight: '100vh', background: '#1F3864', display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 },
  brand:     { display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  brandName: { color: '#fff', fontWeight: 800, fontSize: 16, lineHeight: 1.2 },
  brandSub:  { color: 'rgba(255,255,255,0.5)', fontSize: 11 },
  nav:       { flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 4 },
  navItem:   { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.85)', fontSize: 14, transition: 'all 0.2s', textDecoration: 'none' },
  footer:    { padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.1)' },
  userName:  { color: '#fff', fontWeight: 600, fontSize: 13, marginBottom: 2 },
  userEmail: { color: 'rgba(255,255,255,0.5)', fontSize: 11, marginBottom: 12 },
  logoutBtn: { width: '100%', padding: '8px', borderRadius: 6, background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: 13 },
}
