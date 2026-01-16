import { Route, Routes } from 'react-router-dom'
import PublicRoute from './Routes/PublicRoute'

function App() {
  return (
    <>
      <div className="min-w-full px-3 sm:px-6 md:px-10 lg:px-30 bg-gray-95 text-white no-scrollbar">
        <Routes>
          <Route path="/*" element={<PublicRoute />} />
        </Routes>
      </div>
      <div className="py-6 px-2 sm:px-10 border-t border-white mt-6 bg-gray-50/20">
        <h3 className="text-xl mb-3 font-mono font-semibold">
          Expense Tracker
        </h3>
        <div className="text-white">
          <span>+91 985125334</span>
        </div>
        <p className="text-white">
          Build by: Abhirup Roy <sup>(Software Developer Engineer)</sup>
        </p>
      </div>
    </>
  )
}

export default App
