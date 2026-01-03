import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'

function PublicRoute() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
    </Routes>
  )
}

export default PublicRoute
