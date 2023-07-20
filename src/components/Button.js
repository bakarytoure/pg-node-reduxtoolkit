import React from 'react'
import { OpenButtonFun } from '../stores'
import { useDispatch, useSelector } from 'react-redux'

function Button() {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => {
    return state.data
  })
  const { searchInput } = useSelector((state) => {
    return state.form
  })

  const datas = data.filter((data) =>
    data.name.toLowerCase().includes(searchInput.toLowerCase())
  )
  const OnOffButton = () => {
    dispatch(OpenButtonFun())
  }

  if (datas.length !== 0) {
    return (
      <button className='button-up' onClick={OnOffButton}>
        Open income/expense tap
      </button>
    )
  }
  return null
}

export default Button
