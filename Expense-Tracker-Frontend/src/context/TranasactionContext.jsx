import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const transactionContext = createContext()

function TranasactionContextProvider({ children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    getTransactions(setData)
  }, [])

  return (
    <transactionContext.Provider value={{ data }}>
      {children}
    </transactionContext.Provider>
  )
}

export default TranasactionContextProvider

const getTransactions = async (setData) => {
  try {
    const res = await axios.get('http://localhost:3001/api/get-all-detail')
    if (!res) return false

    return setData(res.data.data)
  } catch (error) {
    console.error(error)
  }
}
