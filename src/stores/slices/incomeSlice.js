import { createSlice, nanoid } from '@reduxjs/toolkit'

const incomeSlice = createSlice({
  name: 'income',
  initialState: {
    isDisabled: false,
    showIncome: false,
    showExpense: false,
    incomeValue: 0,
    dailyValue: 0,
    mounthlyIncome: 0,
    expenseValue: 0,
    dailyExValue: 0,
    mounthlyEx: 0,
    remaining: 200000,
    selectedData: [],
    inc: 'Income',
    exp: 'Expense',
  },
  reducers: {
    CloseButon(state, action) {
      state.isDisabled = false
      state.showIncome = false
      state.showExpense = false
    },
    OpenButtonFun(state, action) {
      state.isDisabled = true
    },
    ShowIncome(state, action) {
      // const { type } = action.payload

      state.showIncome = true
      state.showExpense = false
      state.selectedData.push({
        type: state.inc,

        id: nanoid(),
      })
    },
    ShowExpense(state, action) {
      // const { type } = action.payload

      state.showIncome = false
      state.showExpense = true
      state.selectedData.push({
        type: state.exp,
        id: nanoid(),
      })
    },
    AddIncomeFun(state, action) {
      // const { amount } = action.payload

      state.dailyValue = state.dailyValue + state.incomeValue
      state.mounthlyIncome = state.mounthlyIncome + state.incomeValue
      state.selectedData.push({
        amount: state.incomeValue,
        id: nanoid(),
      })
      state.incomeValue = ''
    },
    AddExpenseFun(state, action) {
      // const { amount } = action.payload

      state.dailyExValue = state.dailyExValue + state.incomeValue
      state.mounthlyEx = state.mounthlyEx + state.incomeValue
      state.remaining = state.remaining - state.incomeValue

      state.selectedData.push({
        amount: state.incomeValue,
        id: nanoid(),
      })

      state.incomeValue = ''
    },
    ChangeInputValue(state, action) {
      state.incomeValue = action.payload
    },
    ResetDailyIncome(state, action) {
      state.dailyValue = 0
    },
    ResetDailyExp(state, action) {
      state.dailyExValue = 0
    },
    SelectedData(state, action) {
      const { name } = action.payload
      state.selectedData.push({
        name: name,
        id: nanoid(),
      })
    },
  },
})

export const incomeReducer = incomeSlice.reducer
export const {
  CloseButon,
  ShowIncome,
  ShowExpense,
  OpenButtonFun,
  ChangeInputValue,
  AddIncomeFun,
  ResetDailyIncome,
  AddExpenseFun,
  ResetDailyExp,
  SelectedData,
} = incomeSlice.actions
