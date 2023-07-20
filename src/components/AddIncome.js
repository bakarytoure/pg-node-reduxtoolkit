import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddIncomeFun } from '../stores'
import Input from './Input'
import Reset from './Reset'
function AddExpenseIncome() {
  const { showIncome, amount } = useSelector((state) => {
    return state.income
  })
  const dispatch = useDispatch()

  const AddDailyIncome = (amount) => {
    dispatch(AddIncomeFun(amount))
  }

  if (showIncome) {
    return (
      <>
        <div>
          <Input />
        </div>
        <div>
          <Reset />
          <button
            className='btn-add-inc'
            onClick={() => AddDailyIncome(amount)}
          >
            Add Income
          </button>
        </div>
      </>
    )
  }
}

export default AddExpenseIncome
