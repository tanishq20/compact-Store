import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CategoriesProvider } from './context/categories/categoriesProvider'
import { makeServer } from './server'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
