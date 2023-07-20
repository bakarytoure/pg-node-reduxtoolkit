import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changeInputValue } from '../stores'
function Search() {
  const dispatch = useDispatch()
  const amount = useSelector((state) => state.form.searchInput)
  const handleOnChange = (e) => {
    dispatch(changeInputValue(e.target.value))
  }
  console.log('State:', amount)
  return (
    <div className='search-container'>
      <input
        placeholder='find item....'
        className='search-input'
        value={amount}
        onChange={handleOnChange}
      />
    </div>
  )
}

export default Search
