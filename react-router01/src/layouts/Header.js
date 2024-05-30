import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {
  console.log('Header...')
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <header>
      <h1>Header</h1>
      <p>Current Path : {location.pathname} </p>
      <button onClick={()=> navigate('/')}>Home</button>
      <hr />
    </header>
  )
}

export default Header