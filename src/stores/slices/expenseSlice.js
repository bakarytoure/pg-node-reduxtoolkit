import { createSlice } from '@reduxjs/toolkit'

const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    isDisabled: false,
    showIncome: false,
    showExpense: false,
    expenseValue: 0,
    dailyExpenseValue: 0,
    mounthlyExpense: 0,
  },
  reducers: {
    OnOffExpenseButton(state, action) {
      state.isDisabled = true
    },
    OffExpenseButton(state, action) {
      state.isDisabled = false
      state.showExpense = false
      state.showIncome = false
    },
    ShowExpense(state, action) {
      state.showExpense = true
      state.showIncome = false
    },
  },
})

export const expenseReducer = expenseSlice.reducer
export const { OnOffExpenseButton, OffExpenseButton, ShowExpense } =
  expenseSlice.actions
