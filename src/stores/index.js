import { configureStore } from '@reduxjs/toolkit'
import {
  incomeReducer,
  ShowIncome,
  ShowExpense,
  CloseButon,
  OpenButtonFun,
  AddIncomeFun,
  ChangeInputValue,
  ResetDailyIncome,
  AddExpenseFun,
  ResetDailyExp,
  SelectedData,
} from './slices/incomeSlice'
import {
  expenseReducer,
  OnOffExpenseButton,
  OffExpenseButton,
} from './slices/expenseSlice'
import { fromReducer, changeInputValue } from './slices/formSlice'
import { dataReducer } from './slices/dataSlice'

export const store = configureStore({
  reducer: {
    income: incomeReducer,
    expense: expenseReducer,
    form: fromReducer,
    data: dataReducer,
  },
})
export {
  changeInputValue,
  OnOffExpenseButton,
  OffExpenseButton,
  ShowExpense,
  ShowIncome,
  CloseButon,
  OpenButtonFun,
  AddIncomeFun,
  ChangeInputValue,
  ResetDailyIncome,
  AddExpenseFun,
  ResetDailyExp,
  SelectedData,
}
export * from './thunks/fetchDatas'
