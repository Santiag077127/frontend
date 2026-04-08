import api from './api'

export const operationsService = {
  getActive:  () => api.get('/admin/operations/active'),
  getAll:     () => api.get('/admin/operations'),
  getSummary: () => api.get('/admin/dashboard'),
}
