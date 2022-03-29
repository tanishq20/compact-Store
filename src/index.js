import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ProductsProvider, CategoriesProvider, FilterProvider } from './context'
import { makeServer } from './server'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <CategoriesProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </CategoriesProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
