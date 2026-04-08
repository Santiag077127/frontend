import api from './api'

export interface LoginCredentials {
  correo: string
  contrasena: string
}

export interface AuthResponse {
  user: { id: string; nombre: string; correo: string; role: string }
  token: string
}

export const authService = {
  login: (creds: LoginCredentials) =>
    api.post<AuthResponse>('/auth/login', creds),

  logout: () =>
    api.post('/auth/logout'),
}
