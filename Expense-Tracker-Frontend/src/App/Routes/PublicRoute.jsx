import { Route, Routes } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import SpendsPage from '../../Pages/SpendsPage'

function PublicRoute() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/spend" element={<SpendsPage />} />
    </Routes>
  )
}

export default PublicRoute
