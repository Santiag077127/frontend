import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native'

export default function RegisterScreen() {
  const [nombre,     setNombre]     = useState('')
  const [correo,     setCorreo]     = useState('')
  const [telefono,   setTelefono]   = useState('')
  const [contrasena, setContrasena] = useState('')
  const [confirmar,  setConfirmar]  = useState('')
  const [error,      setError]      = useState('')
  const [loading,    setLoading]    = useState(false)

  const handleRegister = () => {
    setError('')

    if (!nombre || !correo || !telefono || !contrasena || !confirmar) {
      setError('Por favor completa todos los campos')
      return
    }
    if (contrasena !== confirmar) {
      setError('Las contraseñas no coinciden')
      return
    }
    if (contrasena.length < 8) {
      setError('La contraseña debe tener mínimo 8 caracteres')
      return
    }

    setLoading(true)
    // Aquí irá la llamada al backend cuando esté listo
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.page}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo y título */}
        <Text style={styles.logo}>🚗</Text>
        <Text style={styles.title}>Crear cuenta</Text>
        <Text style={styles.subtitle}>Completa el formulario para registrarte</Text>

        {/* Formulario */}
        <View style={styles.form}>

          <View style={styles.field}>
            <Text style={styles.label}>Nombre completo</Text>
            <TextInput
              style={styles.input}
              value={nombre}
              onChangeText={setNombre}
              placeholder="Tu nombre completo"
              placeholderTextColor="#aaa"
              autoCapitalize="words"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              value={correo}
              onChangeText={setCorreo}
              placeholder="correo@ejemplo.com"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Teléfono</Text>
            <TextInput
              style={styles.input}
              value={telefono}
              onChangeText={setTelefono}
              placeholder="3001234567"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              value={contrasena}
              onChangeText={setContrasena}
              placeholder="Mínimo 8 caracteres"
              placeholderTextColor="#aaa"
              secureTextEntry
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Confirmar contraseña</Text>
            <TextInput
              style={styles.input}
              value={confirmar}
              onChangeText={setConfirmar}
              placeholder="Repite tu contraseña"
              placeholderTextColor="#aaa"
              secureTextEntry
            />
          </View>

          {/* Error */}
          {error ? (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>⚠ {error}</Text>
            </View>
          ) : null}

          {/* Botón */}
          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleRegister}
            disabled={loading}
          >
            {loading
              ? <ActivityIndicator color="#fff" />
              : <Text style={styles.buttonText}>Crear cuenta</Text>
            }
          </TouchableOpacity>

        </View>

        {/* Enlace al login */}
        <Text style={styles.footer}>
          ¿Ya tienes cuenta?{' '}
          <Text style={styles.link}>Inicia sesión</Text>
        </Text>

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: '#1F3864',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo:     { fontSize: 64, marginBottom: 8 },
  title:    { fontSize: 28, fontWeight: '700', color: '#fff', marginBottom: 4 },
  subtitle: { fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 32 },

  form: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    gap: 16,
  },
  field: { gap: 6 },
  label: { fontSize: 13, fontWeight: '600', color: '#444' },
  input: {
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#333',
  },

  errorBox: {
    backgroundColor: '#FFF0F0',
    borderRadius: 8,
    padding: 12,
  },
  errorText: { color: '#c0392b', fontSize: 13 },

  button: {
    backgroundColor: '#1F3864',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonDisabled: { opacity: 0.7 },
  buttonText:     { color: '#fff', fontSize: 15, fontWeight: '600' },

  footer: { marginTop: 24, color: 'rgba(255,255,255,0.8)', fontSize: 14 },
  link:   { color: '#fff', fontWeight: '700' },
})