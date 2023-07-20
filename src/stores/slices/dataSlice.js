import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../thunks/fetchDatas'

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = action.error
      state.isLoading = false
    })
  },
})

export const dataReducer = dataSlice.reducer
