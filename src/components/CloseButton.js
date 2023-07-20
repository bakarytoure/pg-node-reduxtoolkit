import React from 'react'
import { useDispatch } from 'react-redux'
import { CloseButon } from '../stores'

function CloseButton() {
  const dispatch = useDispatch()

  const OffIncExpButton = () => {
    dispatch(CloseButon())
  }
  return (
    <button className='close-btn' onClick={OffIncExpButton}>
      Close
    </button>
  )
}

export default CloseButton
