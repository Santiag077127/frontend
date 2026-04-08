import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { operationsService } from '../../services/operationsService'

interface Operation {
  id: string
  cliente: string
  servicio: string
  operador: string
  estado: string
  fecha: string
}

interface OperationsState {
  active:  Operation[]
  loading: boolean
}

export const fetchActiveOperations = createAsyncThunk('operations/fetchActive', async () => {
  const res = await operationsService.getActive()
  return res.data
})

const operationsSlice = createSlice({
  name: 'operations',
  initialState: { active: [] as Operation[], loading: false } as OperationsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveOperations.pending,   (state) => { state.loading = true })
      .addCase(fetchActiveOperations.fulfilled, (state, { payload }) => { state.active = payload; state.loading = false })
      .addCase(fetchActiveOperations.rejected,  (state) => { state.loading = false })
  },
})

export default operationsSlice.reducer
