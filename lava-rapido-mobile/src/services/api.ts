/**
 * api.ts — Singleton Axios con interceptores HTTPS
 * Patrón: Singleton + Repository
 * RNF5: Toda comunicación via HTTPS
 * RNF7: Token JWT adjunto automáticamente
 */
import axios from 'axios';
import { store } from '../store';

const api = axios.create({
  baseURL: 'https://api.lavarapido.com/v1', // HTTPS obligatorio (RNF5)
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Interceptor: adjunta token JWT en cada petición
api.interceptors.request.use((config) => {
  const token = (store.getState() as any).auth.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Interceptor: manejo global de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch({ type: 'auth/logout' });
    }
    return Promise.reject(error);
  }
);

export default api;
