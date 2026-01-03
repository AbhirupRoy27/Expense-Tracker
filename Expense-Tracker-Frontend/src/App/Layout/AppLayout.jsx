import AmountCard from '../components/AmountCard'
import InputForm from '../components/InputForm'
import TopBar from '../components/TopBar'

function AppLayout() {
  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-30 bg-gray-950 h-screen text-white">
      <TopBar />
      <AmountCard />
      <div className="py-2">
        <h3 className="text-2xl tracking-wider font-semibold pb-3 border-b border-white/30">
          Enter Expense
        </h3>
        <InputForm />
      </div>
    </div>
  )
}

export default AppLayout
