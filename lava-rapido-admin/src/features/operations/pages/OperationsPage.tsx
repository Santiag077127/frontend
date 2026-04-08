import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { fetchActiveOperations } from '../operationsSlice'

const STATE_STYLES: Record<string, { bg: string; color: string; label: string }> = {
  pendiente:   { bg: '#FFF8E1', color: '#B7791F', label: 'Pendiente' },
  en_proceso:  { bg: '#EBF8FF', color: '#2B6CB0', label: 'En proceso' },
  completado:  { bg: '#E6F9F0', color: '#1a7f4b', label: 'Completado' },
  cancelado:   { bg: '#FFF0F0', color: '#c0392b', label: 'Cancelado' },
}

export default function OperationsPage() {
  const dispatch = useAppDispatch()
  const { active, loading } = useAppSelector((s) => s.operations)

  useEffect(() => { dispatch(fetchActiveOperations()) }, [dispatch])

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1F3864', marginBottom: 20 }}>
        Supervisión de Operaciones
      </h2>

      {loading ? (
        <p style={{ color: '#888', textAlign: 'center', padding: 40 }}>Cargando operaciones...</p>
      ) : active.length === 0 ? (
        <div style={{ background: '#fff', borderRadius: 12, padding: 48, textAlign: 'center', color: '#aaa', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <p style={{ fontSize: 40, marginBottom: 12 }}>🚗</p>
          <p>No hay operaciones activas en este momento</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {active.map((op) => {
            const s = STATE_STYLES[op.estado] ?? STATE_STYLES.pendiente
            return (
              <div key={op.id} style={{ background: '#fff', borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <p style={{ fontWeight: 700, color: '#1F3864', marginBottom: 4 }}>{op.servicio}</p>
                  <p style={{ fontSize: 13, color: '#666' }}>Cliente: {op.cliente} · Operario: {op.operador}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ padding: '5px 12px', borderRadius: 20, fontSize: 12, fontWeight: 700, background: s.bg, color: s.color }}>{s.label}</span>
                  <p style={{ fontSize: 12, color: '#999', marginTop: 4 }}>{op.fecha}</p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
