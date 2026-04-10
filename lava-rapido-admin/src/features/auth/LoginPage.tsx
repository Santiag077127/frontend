import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { loginAdmin } from './authSlice'
import styles from './LoginPage.module.css'
import logo from '../../assets/carwash.png'

export default function LoginPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { loading, error } = useAppSelector((s) => s.auth)

  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!correo || !contrasena) return

    const result = await dispatch(loginAdmin({ correo, contrasena }))

    if (loginAdmin.fulfilled.match(result)) {
      navigate('/')
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        
        {/* IZQUIERDA */}
        <div className={styles.left}>
          <img
            src={logo}
            alt="logo"
            className={styles.logo}
          />
        </div>

        {/* DERECHA */}
        <div className={styles.right}>
          <h1 className={styles.title}>Bienvenido</h1>

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <span className={styles.icon}>📧</span>
              <input
                type="email"
                placeholder="Ingresar Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className={styles.input}
                disabled={loading}
              />
            </div>

            <div className={styles.inputGroup}>
              <span className={styles.icon}>🔒</span>
              <input
                type="password"
                placeholder="Ingresar Contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                className={styles.input}
                disabled={loading}
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button
              type="submit"
              className={styles.button}
              disabled={loading}
            >
              {loading ? 'Ingresando...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className={styles.links}>
            <span className={styles.link}>Registrarse</span>
            <span className={styles.link}>Recuperar contraseña</span>
          </div>
        </div>

      </div>
    </div>
  )
}