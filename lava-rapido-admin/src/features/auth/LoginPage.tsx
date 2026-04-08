import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { loginAdmin } from './authSlice'

export default function LoginPage() {
  const dispatch  = useAppDispatch()
  const navigate  = useNavigate()
  const { loading, error } = useAppSelector((s) => s.auth)

  const [correo,    setCorreo]    = useState('')
  const [contrasena, setContrasena] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const result = await dispatch(loginAdmin({ correo, contrasena }))
    if (loginAdmin.fulfilled.match(result)) navigate('/')
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logo}>🚗</div>
        <h1 style={styles.title}>Lava Rápido</h1>
        <p style={styles.subtitle}>Panel Administrativo</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Correo electrónico</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="admin@lavarapido.com"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Contraseña</label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="••••••••"
              required
              style={styles.input}
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? 'Ingresando...' : 'Iniciar sesión'}
          </button>
        </form>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1F3864 0%, #2E5AAC 100%)',
  },
  card: {
    background: '#fff',
    borderRadius: 16,
    padding: '40px 36px',
    width: '100%',
    maxWidth: 400,
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  logo:     { fontSize: 48, marginBottom: 8 },
  title:    { fontSize: 26, fontWeight: 700, color: '#1F3864', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#888', marginBottom: 28 },
  form:     { display: 'flex', flexDirection: 'column', gap: 16 },
  field:    { display: 'flex', flexDirection: 'column', gap: 6, textAlign: 'left' },
  label:    { fontSize: 13, fontWeight: 600, color: '#444' },
  input: {
    padding: '10px 14px',
    borderRadius: 8,
    border: '1.5px solid #ddd',
    fontSize: 14,
    transition: 'border-color 0.2s',
  },
  error:  { color: '#e53e3e', fontSize: 13, textAlign: 'left' },
  button: {
    padding: '12px',
    borderRadius: 8,
    background: '#1F3864',
    color: '#fff',
    fontSize: 15,
    fontWeight: 600,
    marginTop: 4,
    transition: 'background 0.2s',
  },
}
