import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'



export default function LoginScreen() {

  const navigation = useNavigation<any>()
  
  return (
    <View style={styles.container}>

      {/* Logo */}
      <Image
        source={require('../../../assets/logo.png')} // cambia por tu logo
        style={styles.logo}
      />

      {/* Input Correo */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="#555" />
        <TextInput
          placeholder="Correo"
          style={styles.input}
        />
      </View>

      {/* Input Contraseña */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="#555" />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Botón */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      {/* Links */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Recuperar Contraseña</Text>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFD0DB', // fondo azul claro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55,
    width: '100%',
    marginBottom: 15,
  },

  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#1E5AA8',
    width: '100%',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  link: {
    color: '#1E1E1E',
    textDecorationLine: 'underline',
    marginTop: 8,
    fontSize: 14,
  },
})