import React from 'react'
import { useDispatch } from 'react-redux'
import { ResetDailyIncome } from '../stores'
function Reset() {
  const dispatch = useDispatch()
  const OnResetClick = () => {
    dispatch(ResetDailyIncome())
  }
  return (
    <button className='btn-reset' onClick={OnResetClick}>
      Reset
    </button>
  )
}

export default Reset
