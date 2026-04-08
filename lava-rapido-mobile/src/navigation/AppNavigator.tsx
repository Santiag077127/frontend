/**
 * AppNavigator.tsx
 * Patrón: Guard / Protected Routes por rol
 * RF1.5: Cierre de sesión | RNF7: Control de roles
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
// import AuthNavigator from './AuthNavigator';
// import ClientNavigator from './ClientNavigator';
// import OperatorNavigator from './OperatorNavigator';

const AppNavigator = () => {
  const { user, token } = useSelector((state: RootState) => state.auth);

  if (!token) {
    return null; // <AuthNavigator />
  }

  switch ((user as any)?.role) {
    case 'client':   return null; // <ClientNavigator />
    case 'operator': return null; // <OperatorNavigator />
    default:         return null; // <AuthNavigator />
  }
};

export default AppNavigator;
