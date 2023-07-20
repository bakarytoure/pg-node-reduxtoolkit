import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ShowIncome } from '../stores'

function Income() {
  const dispatch = useDispatch()
  const { type } = useSelector((state) => {
    return state.income
  })
  const OnClickIncome = (type) => {
    dispatch(ShowIncome(type))
  }
  return (
    <button className='btn-income' onClick={() => OnClickIncome(type)}>
      Income
    </button>
  )
}

export default Income
