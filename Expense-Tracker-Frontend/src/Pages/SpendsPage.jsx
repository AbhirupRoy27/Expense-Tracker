import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function SpendsPage() {
  const navigate = useNavigate()

  const { amount } = useSelector((s) => s.input)

  return (
    <div className="py-3">
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
      <h4 className="font-extralight tracking-widest">
        This is the all spend page
      </h4>
    </div>
  )
}

export default SpendsPage
