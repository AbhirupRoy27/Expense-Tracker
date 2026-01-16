import { Calendar } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from '../utils/getTotal'

function AmountCard() {
  const { amount } = useSelector((s) => s.input)
  const dispatch = useDispatch()

  useEffect(() => {
    getTotal(dispatch)
  }, [dispatch])

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]

  const month = months[new Date().getMonth()]

  return (
    <div className="w-full sm:w-auto  bg-white/30 my-6 rounded-2xl">
      <div className="min-h-15 w-full bg-white/50 rounded-tr-2xl rounded-tl-2xl border-b-3 border-white object-cover flex items-center">
        <h1 className="text-3xl font-semibold tracking-wider text-gray-950 px-4 sm:px-7 flex gap-2 items-center">
          {month} <Calendar size={30} />
        </h1>
      </div>
      <div className="px-1 py-5 sm:px-7">
        <h2 className="text-2xl mb-2 font-extralight tracking-wider border-b border-white/30 w-fit pb-2">
          Total Spend
        </h2>
        <h1 className="text-4xl text-right font-bold px-2">Rs. {amount}</h1>
      </div>
    </div>
  )
}

export default AmountCard
