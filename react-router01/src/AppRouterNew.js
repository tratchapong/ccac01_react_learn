import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'

const router = createBrowserRouter([
  { 
    path: '/' ,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home />},
      { path: 'about', element: <About />},
      { path: 'contact', element: <Contact />},
      { path: 'product/:id', element: <Product />}
    ]
  },
])

function AppRouterNew() {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouterNew