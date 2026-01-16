import { Route, Routes } from 'react-router-dom'
import PublicRoute from './Routes/PublicRoute'

function App() {
  return (
    <div className="min-w-100 px-3 sm:px-6 md:px-10 lg:px-30 bg-gray-950 h-screen text-white overflow-hidden">
      <Routes>
        <Route path="/*" element={<PublicRoute />} />
      </Routes>
    </div>
  )
}

export default App
