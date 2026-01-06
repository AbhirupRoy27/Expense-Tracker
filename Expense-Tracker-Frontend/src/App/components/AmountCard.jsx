import { useSelector } from 'react-redux'

function AmountCard() {
  const { amount } = useSelector((s) => s.input)

  return (
    <div className="w-full sm:w-auto  bg-white/30 my-6 rounded-2xl">
      <div className="min-h-15 w-full bg-white/50 rounded-tr-2xl rounded-tl-2xl border-b-3 border-white object-cover"></div>
      <div className="px-4 pt-10 pb-5">
        <h2 className="text-2xl mb-2 font-extralight tracking-wider border-b border-white/30 w-fit pb-2">
          Total Spend
        </h2>
        <h1 className="text-4xl text-right font-bold">Rs. {amount}</h1>
      </div>
    </div>
  )
}

export default AmountCard
