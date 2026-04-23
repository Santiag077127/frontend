import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { images } from '../../../assets/images'
import { useNavigation, NavigationProp } from '@react-navigation/native'

type RootStackParamList = {
  ServiceDetail: { service: { id: number; title: string; description: string; image: any } }
}

export default function HomeScreen() {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const services = [
    {
      id: 1,
      title: 'Lavado Básico',
      description: 'Limpieza de carrocería, aplicación de shampoo, secado a mano y limpieza de rines.',
      image: images.ServicioBasico
    },
    {
      id: 2,
      title: 'Lavado de Motor',
      description: 'Limpieza técnica con desengrasantes especiales (preferiblemente al vapor para proteger componentes eléctricos). ',
      image: images.ServicioMotor
    },
    {
      id: 3,
      title: 'Aspirado Profundo',
      description: 'Alfombras, asientos, baúl y rincones de difícil acceso.',
      image: images.ServicioAspirado
    },
    
    {
      id: 4,
      title: 'Lavado de Tapicería',
      description: 'Limpieza con máquinas de inyección y succión para asientos de tela, alfombras y techos.',
      image: images.ServicioTapiceria
    },
    {
      id: 5,
      title: 'Pulido y Abrillantado',
      description: 'Eliminación de micro-rayones (swirls) y restauración del brillo de la pintura.',
      image: images.ServicioPulido
    },
    {
      id: 6,
      title: 'Encerado Profesional',
      description: 'Aplicación de ceras de carnauba o sintéticas para protección a corto plazo.',
      image: images.ServicioEncerado
    }

  ]

  return (
    <ScrollView style={styles.container}>

      {/* Buscador */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar servicios..."
          style={styles.searchInput}
        />
        <Ionicons name="search" size={20} color="#000" />
      </View>

      {/* Lista de servicios */}

      {services.map((item) => (
        <TouchableOpacity
        key={item.id}
        style={styles.card}
        onPress={() =>
        navigation.navigate('ServiceDetail', { service: item })
        }
      >
        <Image source={item.image} style={styles.image} />

        <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>
            {item.description}
        </Text>
        </View>
        </TouchableOpacity>
        ))}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#BFD0DB',
  padding: 15,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
  width: 80,
  height: 80,
  borderRadius: 40,
  resizeMode: 'cover',
  borderWidth: 2,
  borderColor: '#fff',
},

  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    borderRadius: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginVertical: 15,
    height: 45,
    justifyContent: 'space-between'
  },

  searchInput: {
    flex: 1,
  },
    
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    elevation: 3, // sombra Android
    },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  textContainer: {
    flex: 1,
    marginLeft: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  description: {
    fontSize: 12,
    color: '#333',
  },
})