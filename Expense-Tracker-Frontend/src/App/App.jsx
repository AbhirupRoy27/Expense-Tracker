import { Route, Routes } from 'react-router-dom'
import PublicRoute from './Routes/PublicRoute'

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PublicRoute />} />
      </Routes>
    </>
  )
}

export default App
