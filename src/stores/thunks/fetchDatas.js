import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'http://localhost:3005/datas'

export const fetchData = createAsyncThunk('data/fetch', async () => {
  const respone = await axios.get(`${url}`)
  return respone.data
})
export const fetchDataById = createAsyncThunk('databyid/fetch', async (id) => {
  const respone = await axios.get(`${url}/${id}`)
  return respone.data
})
