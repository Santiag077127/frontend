import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { servicesService, type Servicio } from '../../services/servicesService'

interface ServicesState {
  list:    Servicio[]
  loading: boolean
  error:   string | null
}

const initialState: ServicesState = { list: [], loading: false, error: null }

export const fetchServices  = createAsyncThunk('services/fetchAll', async () => {
  const res = await servicesService.getAll()
  return res.data
})

export const createService  = createAsyncThunk('services/create', async (data: Omit<Servicio, 'id'>) => {
  const res = await servicesService.create(data)
  return res.data
})

export const updateService  = createAsyncThunk('services/update',
  async ({ id, data }: { id: string; data: Partial<Servicio> }) => {
    const res = await servicesService.update(id, data)
    return res.data
  }
)

export const deleteService  = createAsyncThunk('services/delete', async (id: string) => {
  await servicesService.remove(id)
  return id
})

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending,    (state) => { state.loading = true })
      .addCase(fetchServices.fulfilled,  (state, { payload }) => { state.list = payload; state.loading = false })
      .addCase(fetchServices.rejected,   (state) => { state.loading = false })
      .addCase(createService.fulfilled,  (state, { payload }) => { state.list.push(payload) })
      .addCase(updateService.fulfilled,  (state, { payload }) => {
        const i = state.list.findIndex((s) => s.id === payload.id)
        if (i !== -1) state.list[i] = payload
      })
      .addCase(deleteService.fulfilled,  (state, { payload }) => {
        state.list = state.list.filter((s) => s.id !== payload)
      })
  },
})

export default servicesSlice.reducer
