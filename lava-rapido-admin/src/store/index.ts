import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import servicesReducer from '../features/services/servicesSlice'
import operationsReducer from '../features/operations/operationsSlice'

export const store = configureStore({
  reducer: {
    auth:       authReducer,
    services:   servicesReducer,
    operations: operationsReducer,
  },
})

export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
