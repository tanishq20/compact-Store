import axios from 'axios'
import { createContext, useContext, useReducer, useEffect } from 'react'
import { productsReducer } from '../../reducer'

const ProductContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [productsState, productsDispatch] = useReducer(productsReducer, {
    products: [],
    productsLoading: true,
    productsError: false,
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    productsDispatch({ type: 'GET_PRODUCTS' })
    try {
      const productsData = await axios.get('api/products')
      productsDispatch({
        type: 'GET_PRODUCTS_SUCCESS',
        payload: productsData.data.products,
      })
    } catch (error) {
      productsDispatch({ type: 'GET_PRODUCTS_ERROR' })
    }
  }

  return (
    <ProductContext.Provider value={{ productsState }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
