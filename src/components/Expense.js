import React from 'react'
import { ShowExpense } from '../stores'
import { useDispatch, useSelector } from 'react-redux'

function Expense() {
  const dispatch = useDispatch()
  const { type } = useSelector((state) => {
    return state.income
  })
  const OnClickExpense = (type) => {
    dispatch(ShowExpense(type))
  }
  return (
    <button className='btn-expense' onClick={() => OnClickExpense(type)}>
      Expense
    </button>
  )
}

export default Expense
