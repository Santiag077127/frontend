import React, { useEffect, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated'

const { height } = Dimensions.get('window')

export default function ServiceDetailScreen({ route }: any) {
  const { service } = route.params

  const translateY = useSharedValue(300)

  useEffect(() => {
    translateY.value = withTiming(0, { duration: 500 })
  }, [])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  return (
    <View style={styles.container}>
      <Image source={service.image} style={styles.image} />

      <Animated.View style={[styles.card, animatedStyle]}>
        <Text style={styles.title}>{service.title}</Text>

        <Text style={styles.description}>
          {service.description}
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reservar servicio</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    width: '100%',
    height: height * 0.45,
  },

  card: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height * 0.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    elevation: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#1E6FB9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})