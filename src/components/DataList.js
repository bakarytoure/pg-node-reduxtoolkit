import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SelectedData, fetchData } from '../stores'
import { FadeLoader } from 'react-spinners'
function DataList() {
  const dispatch = useDispatch()

  const { data, isLoading, error } = useSelector((state) => {
    return state.data
  })
  const { selectedData, type, amount } = useSelector((state) => {
    return state.income
  })
  console.log('Data selected:', selectedData)

  const { searchInput } = useSelector((state) => {
    return state.form
  })

  const datas = data.filter((data) =>
    data.name.toLowerCase().includes(searchInput.toLowerCase())
  )
  // const selectedName=datas.filter((data)=>data=>)
  //   const datas = useSelector(({ form: { searchInput }, data: { data } }) => {
  //     return data.filter((data) =>
  //       data.name.toLowerCase().includes(searchInput.toLowerCase())
  //     )
  //   })

  const handlePickData = (name, type, amount) => {
    const data = dispatch(SelectedData({ name, type, amount }))
    return data
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  if (isLoading) {
    return (
      <div>
        <FadeLoader color='#36d7b7' />
      </div>
    )
  }
  if (error) {
    return <div>Error occur...</div>
  }
  if (datas.length === 0)
    return (
      <div>
        No match found for the below search Term <br />
        <strong style={{ color: 'red' }}> {searchInput}</strong>
      </div>
    )
  return (
    <div>
      {datas.map((item) => (
        <button
          key={item.id}
          className='data'
          onClick={() => handlePickData(item.name, type, amount)}
        >
          <div>{item.name}</div>
          <div>{item.price}</div>
        </button>
      ))}
    </div>
  )
}

export default DataList
