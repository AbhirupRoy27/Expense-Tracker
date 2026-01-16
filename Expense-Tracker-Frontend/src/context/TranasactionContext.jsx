import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const transactionContext = createContext()

function TranasactionContextProvider({ children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    getTransactions(setData, 1)
  }, [])

  return (
    <transactionContext.Provider value={{ data, setData }}>
      {children}
    </transactionContext.Provider>
  )
}

export default TranasactionContextProvider

export const getTransactions = async (setData, page) => {
  try {
    const res = await axios.get(
      // `http://localhost:3001/api/get-all-detail?page=${page}`
      `https://expense-tracker-gray-one-54.vercel.app/api/get-all-detail?page=${page}`
    )
    if (!res) return false

    return setData(res.data.data)
  } catch (error) {
    console.error(error)
  }
}
