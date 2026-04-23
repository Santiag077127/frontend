import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { images } from '../../../assets/images'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      {/* FOTO + NOMBRE */}
      <View style={styles.header}>
        <Image
          source={images.logoPerfil}
          style={styles.avatar}
        />
        <Text style={styles.name}>Santiago</Text>
        <Text style={styles.email}>santiago@email.com</Text>
      </View>

      {/* OPCIONES */}
      <View style={styles.menu}>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="person-outline" size={22} color="#333" />
          <Text style={styles.text}>Editar perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="time-outline" size={22} color="#333" />
          <Text style={styles.text}>Historial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="card-outline" size={22} color="#333" />
          <Text style={styles.text}>Métodos de pago</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="settings-outline" size={22} color="#333" />
          <Text style={styles.text}>Configuración</Text>
        </TouchableOpacity>

      </View>

      {/* BOTÓN LOGOUT */}
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>


    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFD0DB',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30,
  },

  avatar: {
  width: 100,
  height: 100,
  borderRadius: 50,
  marginBottom: 10,
  borderWidth: 3,
  borderColor: '#1E6FB9', // 🔥 borde azul
},

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  email: {
    fontSize: 14,
    color: '#555',
  },

  menu: {
  backgroundColor: '#fff',
  borderRadius: 15,
  padding: 10,
  width: '100%', // 🔥 importante
},

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },

  text: {
    marginLeft: 10,
    fontSize: 16,
  },

  logout: {
  marginTop: 30,
  backgroundColor: '#E74C3C',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  width: '100%', // 🔥 importante
},

  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})