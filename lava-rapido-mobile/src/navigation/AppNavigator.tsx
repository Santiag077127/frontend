import { NavigationContainer } from '@react-navigation/native'
import { useAppSelector } from '../store/hooks'
import AuthNavigator from './AuthNavigator'

export default function AppNavigator() {
  const token = useAppSelector((s) => s.auth.token)

  return (
    <NavigationContainer>
      {token ? (
        // Aquí irá ClientNavigator cuando lo construyas
        <AuthNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  )
}