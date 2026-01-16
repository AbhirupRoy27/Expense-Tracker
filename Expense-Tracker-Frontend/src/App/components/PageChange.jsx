import { useContext } from 'react'
import {
  getTransactions,
  transactionContext,
} from '../../context/TranasactionContext'

function PageChange({ disable }) {
  const { data, setData } = useContext(transactionContext)
  const page = 1

  return (
    <div className="text-2xl text-white flex gap-3 justify-center mt-10">
      <button
        className="bg-gray-500 px-4 py-2 rounded-lg"
        disabled={disable || data.length < 10}
        onClick={() => {
          console.log('clicked')
          getTransactions(setData, page)
        }}
      >
        Prev
      </button>
      <button
        className="bg-gray-500 px-4 py-2 rounded-lg"
        disabled={disable || data.length < 10}
        onClick={() => {
          console.log('clicked')
          getTransactions(setData, page + 1)
        }}
      >
        Next
      </button>
    </div>
  )
}

export default PageChange
