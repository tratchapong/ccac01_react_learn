import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout