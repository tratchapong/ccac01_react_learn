import React from 'react'
import { Outlet } from 'react-router-dom';

function Products() {
  return (
    <div className="product">
      <h2>Product Info</h2>
      <Outlet />
    </div>
  )
}

export default Products