import { useContext } from 'react'
import { transactionContext } from '../context/TranasactionContext'
import SpendLayout from './layout/SpendLayout'
import { ChartColumnBig } from 'lucide-react'
import PageChange from '../App/components/PageChange'

function SpendsPage() {
  const { data } = useContext(transactionContext)
  if (data.length < 1)
    return (
      <div>
        <SpendLayout />
        <h1 className="text-center mt-6 font-mono tracking-widest uppercase flex justify-center items-center gap-3 text-2xl min-h-[60vh]">
          No Data yet <ChartColumnBig size={50} color="blue" />
        </h1>
        <PageChange disable={true} />
      </div>
    )

  // console.log(data)

  return (
    <div className="py-3 min-w-88.5">
      <SpendLayout />
      <div className="flex flex-col gap-2 mt-2 min-h-[60vh]">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white/10 px-4 flex justify-between items-center"
          >
            <div className="py-3 w-4/5 overflow-scroll no-scrollbar">
              <p className="text-white/60 mb-1">
                <b>Category:</b> {item.category || 'Others'}
              </p>
              <p className="text-white/60 flex flex-wrap text-wrap">
                <b className="text-white/80 mr-1 text-lg">Message:</b>
                {item.message.slice(0, 40) + '...' || '...'}
              </p>
            </div>

            <h1 className="py-3 text-xl">₹{item.amount}.00</h1>
          </div>
        ))}
      </div>
      <PageChange disable={false} />
    </div>
  )
}

export default SpendsPage
