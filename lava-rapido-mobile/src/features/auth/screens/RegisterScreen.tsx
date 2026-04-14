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
  Image,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons'

export default function RegisterScreen() {

  const navigation = useNavigation<any>()

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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

        {/* LOGO */}
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />

        {/* FORMULARIO */}
        <View style={styles.form}>

          {/* CORREO */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={20} color="#444" />
            <TextInput
              placeholder="Correo"
              style={styles.input}
              value={correo}
              onChangeText={setCorreo}
            />
          </View>

          {/* TELÉFONO */}
          <View style={styles.inputContainer}>
            <Feather name="phone" size={20} color="#444" />
            <TextInput
              placeholder="Teléfono"
              style={styles.input}
              value={telefono}
              onChangeText={setTelefono}
            />
          </View>

          {/* NOMBRE */}
          <View style={styles.inputContainer}>
            <Feather name="user" size={20} color="#444" />
            <TextInput
              placeholder="Nombre"
              style={styles.input}
              value={nombre}
              onChangeText={setNombre}
            />
          </View>

          {/* CONTRASEÑA */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={20} color="#444" />
            <TextInput
              placeholder="Contraseña"
              secureTextEntry
              style={styles.input}
              value={contrasena}
              onChangeText={setContrasena}
            />
          </View>

          {/* CONFIRMAR */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={20} color="#444" />
            <TextInput
              placeholder="Confirmar contraseña"
              secureTextEntry
              style={styles.input}
              value={confirmar}
              onChangeText={setConfirmar}
            />
          </View>

          {/* ERROR */}
          {error ? (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>⚠ {error}</Text>
            </View>
          ) : null}

          {/* BOTÓN */}
          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleRegister}
            disabled={loading}
          >
            {loading
              ? <ActivityIndicator color="#fff" />
              : <Text style={styles.buttonText}>Registrar</Text>
            }
          </TouchableOpacity>

          {/* LINKS */}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Login')}
          >
            Iniciar Sesión
          </Text>

          <Text style={styles.link}>
            Recuperar contraseña
          </Text>

        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: '#BFD0DB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    minHeight: '100%',
  },  

  logo: {
    width: 140,
    height: 140,
    borderRadius: 20,
    marginBottom: 30,
  },

  /* 🔥 AQUÍ SE ARREGLA LO DE LOS BORDES */
  form: {
    width: '100%',
    paddingHorizontal: 25,
    gap: 15,
    maxWidth: 400, // 🔥 evita que se vea muy ancho en pantallas grandes
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55,
  },

  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
  },

  button: {
    backgroundColor: '#2A66B2',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonDisabled: {
    opacity: 0.7,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  errorBox: {
    backgroundColor: '#FFF0F0',
    borderRadius: 10,
    padding: 12,
  },

  errorText: {
    color: '#c0392b',
    fontSize: 13,
  },

  link: {
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
    color: '#1E1E1E',
    fontSize: 14,
  },
})