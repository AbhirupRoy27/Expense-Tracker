import { Route, Routes } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import SpendsPage from '../../Pages/SpendsPage'
import TranasactionContextProvider from '../../context/TranasactionContext'

function PublicRoute() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route
        path="/spend"
        element={
          <TranasactionContextProvider>
            <SpendsPage />
          </TranasactionContextProvider>
        }
      />
    </Routes>
  )
}

export default PublicRoute
