import AmountCard from '../components/AmountCard'
import TopBar from '../components/TopBar'

function AppLayout() {
  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-30 bg-gray-950 h-screen text-white">
      <TopBar />
      <AmountCard />
    </div>
  )
}

export default AppLayout
