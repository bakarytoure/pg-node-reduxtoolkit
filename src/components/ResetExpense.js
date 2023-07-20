import React from 'react'
import { useDispatch } from 'react-redux'
import { ResetDailyExp } from '../stores'
function ResetExpense() {
  const dispatch = useDispatch()
  const OnResetClick = () => {
    dispatch(ResetDailyExp())
  }
  return (
    <button className='btn-reset' onClick={OnResetClick}>
      Reset
    </button>
  )
}

export default ResetExpense
