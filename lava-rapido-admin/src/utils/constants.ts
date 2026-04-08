export const API_BASE_URL = 'https://api.lavarapido.com/v1'

export const SERVICE_STATES = {
  PENDING:    'pendiente',
  IN_PROCESS: 'en_proceso',
  COMPLETED:  'completado',
  CANCELLED:  'cancelado',
} as const

export const ROLES = {
  ADMIN:    'admin',
  CLIENT:   'client',
  OPERATOR: 'operator',
} as const
