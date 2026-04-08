import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { fetchServices, deleteService } from '../servicesSlice'
import { formatCurrency } from '../../../utils/formatters'

export default function ServicesPage() {
  const dispatch = useAppDispatch()
  const { list, loading } = useAppSelector((s) => s.services)
  const [search, setSearch] = useState('')

  useEffect(() => { dispatch(fetchServices()) }, [dispatch])

  const filtered = list.filter((s) =>
    s.nombre.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2 style={styles.title}>Gestión de Servicios</h2>
        <button style={styles.btnPrimary}>+ Agregar servicio</button>
      </div>

      <input
        placeholder="Buscar servicio..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {loading ? (
        <p style={{ color: '#888', textAlign: 'center', padding: 40 }}>Cargando...</p>
      ) : (
        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                {['Nombre', 'Descripción', 'Precio', 'Duración', 'Estado', 'Acciones'].map((h) => (
                  <th key={h} style={styles.th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={6} style={{ textAlign: 'center', padding: 32, color: '#aaa' }}>Sin resultados</td></tr>
              ) : filtered.map((s) => (
                <tr key={s.id} style={styles.tr}>
                  <td style={styles.td}><strong>{s.nombre}</strong></td>
                  <td style={styles.td}>{s.descripcion}</td>
                  <td style={styles.td}>{formatCurrency(s.precio)}</td>
                  <td style={styles.td}>{s.duracion_estimada} min</td>
                  <td style={styles.td}>
                    <span style={{ ...styles.badge, background: s.activo ? '#e6f9f0' : '#fdecea', color: s.activo ? '#1a7f4b' : '#c0392b' }}>
                      {s.activo ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <button style={styles.btnEdit}>Editar</button>
                    <button style={styles.btnDelete} onClick={() => dispatch(deleteService(s.id))}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page:     { padding: 24 },
  header:   { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title:    { fontSize: 22, fontWeight: 700, color: '#1F3864' },
  btnPrimary: { padding: '10px 20px', background: '#1F3864', color: '#fff', borderRadius: 8, fontSize: 14, fontWeight: 600 },
  search:   { width: '100%', padding: '10px 14px', borderRadius: 8, border: '1.5px solid #ddd', fontSize: 14, marginBottom: 20 },
  tableWrap:{ background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  table:    { width: '100%', borderCollapse: 'collapse' },
  th:       { padding: '14px 16px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#555', background: '#f8f9fa', borderBottom: '1px solid #eee', textTransform: 'uppercase' },
  tr:       { borderBottom: '1px solid #f0f0f0' },
  td:       { padding: '14px 16px', fontSize: 14, color: '#333' },
  badge:    { padding: '4px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600 },
  btnEdit:  { padding: '6px 12px', borderRadius: 6, background: '#EBF4FF', color: '#2E5AAC', fontSize: 13, fontWeight: 600, marginRight: 6 },
  btnDelete:{ padding: '6px 12px', borderRadius: 6, background: '#FFF0F0', color: '#c0392b', fontSize: 13, fontWeight: 600 },
}
