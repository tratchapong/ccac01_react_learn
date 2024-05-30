import React, { useContext, useState } from 'react'
import UserContext from './contexts/UserContext'

function LoginForm() {
  const {updateUser} = useContext(UserContext)
  const [input, setInput] = useState('')
  const hdlSubmit = e => {
    e.preventDefault()
    updateUser(input)
  }
  return (
    <form className='login-form' onSubmit={hdlSubmit}>
      <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm