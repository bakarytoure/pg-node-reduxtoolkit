import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    searchInput: '',
    data: [],
  },
  reducers: {
    changeInputValue(state, action) {
      state.searchInput = action.payload
    },
  },
})
export const { changeInputValue } = formSlice.actions
export const fromReducer = formSlice.reducer
