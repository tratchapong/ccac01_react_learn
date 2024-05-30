import React from 'react'
import ReactDOM from 'react-dom/client'
import App from  './App'
import './styles.css'
import { UserContextProvider } from './contexts/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <UserContextProvider>
    <App/>
  </UserContextProvider>
)
