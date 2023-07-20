import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddExpenseFun } from '../stores'
import Input from './Input'
import ResetExpense from './ResetExpense'
function AddExpense() {
  const dispatch = useDispatch()
  const { showExpense, amount } = useSelector((state) => {
    return state.income
  })
  const handleClickAddExpense = (amount) => {
    dispatch(AddExpenseFun(amount))
  }

  if (showExpense) {
    return (
      <>
        <div>
          <Input />
        </div>
        <div>
          <ResetExpense />
          <button
            className='btn-add-exp'
            onClick={() => handleClickAddExpense(amount)}
          >
            Add Expense
          </button>
        </div>
      </>
    )
  }
}

export default AddExpense
