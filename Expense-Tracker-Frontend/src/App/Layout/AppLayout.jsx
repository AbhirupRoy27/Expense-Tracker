import { Outlet } from 'react-router-dom'
import InputForm from '../components/InputForm'
import TopBar from '../components/TopBar'

// import { useDispatch } from 'react-redux'
// import { resetAmount } from '../../redux/features/inputSlice'

function AppLayout() {
  // const dispatch = useDispatch()

  return (
    <div className="bg-gray-950 h-screen text-white min-w-95">
      <TopBar />
      <Outlet />
    </div>
  )
}

export default AppLayout
