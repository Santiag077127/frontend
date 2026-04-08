import api from './api'

export interface Servicio {
  id: string
  nombre: string
  descripcion: string
  precio: number
  duracion_estimada: number
  activo: boolean
}

export const servicesService = {
  getAll: () =>
    api.get<Servicio[]>('/admin/services'),

  create: (data: Omit<Servicio, 'id'>) =>
    api.post<Servicio>('/admin/services', data),       // RF4.1

  update: (id: string, data: Partial<Servicio>) =>
    api.put<Servicio>(`/admin/services/${id}`, data),  // RF4.2

  remove: (id: string) =>
    api.delete(`/admin/services/${id}`),               // RF4.3
}
