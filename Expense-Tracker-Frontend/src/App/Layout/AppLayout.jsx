import { useNavigate } from 'react-router-dom'
import AmountCard from '../components/AmountCard'
import InputForm from '../components/InputForm'
import TopBar from '../components/TopBar'
import { Wallet } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { resetAmount } from '../../redux/features/inputSlice'

function AppLayout() {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  return (
    <div className=" bg-gray-950 h-screen text-white">
      <TopBar />
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
        <button
          className="bg-emerald-600 text-black py-3 px-4 flex gap-2 font-semibold"
          onClick={() => {
            localStorage.clear('total')
            dispatch(resetAmount())
          }}
        >
          <Wallet /> Clear
        </button>
      </div>
    </div>
  )
}

export default AppLayout
