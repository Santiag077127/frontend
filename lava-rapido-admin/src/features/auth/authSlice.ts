import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authService, type LoginCredentials } from '../../services/authService'

interface User {
  id: string
  nombre: string
  correo: string
  role: string
}

interface AuthState {
  user: User | null
  token: string | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user:    null,
  token:   localStorage.getItem('token'),
  loading: false,
  error:   null,
}

export const loginAdmin = createAsyncThunk(
  'auth/login',
  async (creds: LoginCredentials, { rejectWithValue }) => {
    try {
      const res = await authService.login(creds)
      localStorage.setItem('token', res.data.token)
      return res.data
    } catch (e: unknown) {
      const error = e as { response?: { data?: { message?: string } } }
      return rejectWithValue(error.response?.data?.message || 'Credenciales incorrectas')
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user  = null
      state.token = null
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending,   (state) => { state.loading = true; state.error = null })
      .addCase(loginAdmin.fulfilled, (state, { payload }) => {
        state.user    = payload.user
        state.token   = payload.token
        state.loading = false
      })
      .addCase(loginAdmin.rejected,  (state, { payload }) => {
        state.error   = payload as string
        state.loading = false
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
