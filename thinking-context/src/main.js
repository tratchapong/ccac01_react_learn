import React from 'react'
import ReactDOM from 'react-dom/client'
import App from  './App'
import './styles.css'
import ProductContextProvider from './contexts/productContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ProductContextProvider>
    <App/>
  </ProductContextProvider>
)
