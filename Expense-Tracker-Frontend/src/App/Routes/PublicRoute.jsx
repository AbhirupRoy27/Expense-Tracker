import { Route, Routes } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import SpendsPage from '../../Pages/SpendsPage'
import TranasactionContextProvider from '../../context/TranasactionContext'
import SpendForm from '../../Pages/SpendForm'

function PublicRoute() {
  return (
    <Routes>
      <Route path="/*" element={<AppLayout />}>
        <Route index element={<SpendForm />} />
        <Route
          path="spend"
          element={
            <TranasactionContextProvider>
              <SpendsPage />
            </TranasactionContextProvider>
          }
        />
      </Route>
    </Routes>
  )
}

export default PublicRoute
