import AmountCard from '../App/components/AmountCard'
import { useNavigate } from 'react-router-dom'
import InputForm from '../App/components/InputForm'
import { Wallet } from 'lucide-react'

function SpendForm() {
  const navigate = useNavigate()
  return (
    <div className="min-w-95">
      <AmountCard />
      <div className="py-2">
        <h3 className="text-2xl tracking-wider font-semibold pb-3 border-b border-white/30">
          Enter Expense
        </h3>
        <InputForm />
      </div>
      <div className="flex gap-2">
        <button
          className="bg-emerald-600 text-black py-3 px-4 flex gap-2 font-semibold"
          onClick={() => navigate('/spend')}
        >
          <Wallet /> See All Spends
        </button>
      </div>
    </div>
  )
}

export default SpendForm
