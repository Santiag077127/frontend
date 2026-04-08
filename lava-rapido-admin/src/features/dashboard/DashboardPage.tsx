export default function DashboardPage() {
  const cards = [
    { label: 'Servicios activos',    value: '12',  icon: '🔄', color: '#EBF8FF', border: '#2E5AAC' },
    { label: 'Completados hoy',      value: '28',  icon: '✅', color: '#E6F9F0', border: '#1a7f4b' },
    { label: 'Pendientes',           value: '5',   icon: '⏳', color: '#FFF8E1', border: '#B7791F' },
    { label: 'Servicios en catálogo',value: '8',   icon: '📋', color: '#F5F0FF', border: '#6B46C1' },
  ]

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1F3864', marginBottom: 24 }}>
        Dashboard
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
        {cards.map((c) => (
          <div key={c.label} style={{ background: c.color, borderRadius: 12, padding: '20px 24px', borderLeft: `4px solid ${c.border}` }}>
            <p style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</p>
            <p style={{ fontSize: 28, fontWeight: 800, color: '#1F3864' }}>{c.value}</p>
            <p style={{ fontSize: 13, color: '#555', marginTop: 4 }}>{c.label}</p>
          </div>
        ))}
      </div>

      <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1F3864', marginBottom: 16 }}>Actividad reciente</h3>
        <p style={{ color: '#aaa', textAlign: 'center', padding: 24 }}>Los datos de operaciones aparecerán aquí al conectar el backend.</p>
      </div>
    </div>
  )
}
