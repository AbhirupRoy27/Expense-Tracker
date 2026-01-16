import { useContext } from 'react'
import { transactionContext } from '../context/TranasactionContext'
import SpendLayout from './layout/SpendLayout'
import { ChartColumnBig } from 'lucide-react'

function SpendsPage() {
  const { data } = useContext(transactionContext)
  if (data.length < 1)
    return (
      <div>
        <SpendLayout />
        <h1 className="text-center mt-6 font-mono tracking-widest uppercase flex justify-center items-center gap-3 text-2xl">
          No Data yet <ChartColumnBig size={50} color="blue" />
        </h1>
      </div>
    )

  console.log(data)

  return (
    <div className="py-3 min-w-88.5">
      <SpendLayout />
      <div className="flex flex-col gap-2 mt-2">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white/10 px-4 flex justify-between items-center"
          >
            <p className="text-white/60">
              <b>Category:</b> {item.category || 'Others'}
            </p>

            <h1 className="py-3">₹{item.amount}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpendsPage
