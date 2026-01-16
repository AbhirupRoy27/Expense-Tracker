import { ArrowLeft } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getTotal } from '../../App/utils/getTotal'

function SpendLayout() {
  const navigate = useNavigate()
  const { amount } = useSelector((s) => s.input)

  const dispatch = useDispatch()

  return (
    <>
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 py-3 mb-2 text-xl font-bold tracking-wider"
      >
        <ArrowLeft /> Go back
      </button>
      <div className="py-4 px-4 bg-white/30 mb-3 flex justify-between items-center">
        <h2 className="text-lg tracking-wider font-mono">This Month Total:</h2>
        <span className="text-2xl"> ₹{amount}.00</span>
      </div>
      <div className="border-b border-white/30 pb-2 flex justify-between items-center mt-5">
        <h4 className="font-extralight tracking-widest text-lg sm:text-2xl">
          This is the all spend page
        </h4>
        <button
          className="bg-cyan-500 text-gray-900 py-3 px-1 sm:px-4 flex gap-2 font-semibold rounded-lg min-w-25 justify-center items-center"
          onClick={() => getTotal(dispatch)}
        >
          Load Total
        </button>
      </div>
    </>
  )
}

export default SpendLayout
