import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeInputValue } from '../stores'

function Input() {
  const dispatch = useDispatch()
  const { incomeValue } = useSelector((state) => {
    return state.income
  })
  const HandleInputChange = (e) => {
    dispatch(ChangeInputValue(parseInt(e.target.value)))
  }
  return (
    <div className='expense-income-input'>
      <input
        type='number'
        id='expense-income'
        onChange={HandleInputChange}
        value={incomeValue || ''}
      />
    </div>
  )
}

export default Input
