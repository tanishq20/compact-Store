import axios from 'axios'
import { createContext, useContext, useReducer, useEffect } from 'react'
import { categoriesReducer } from '../../reducer'

const CategoriesContext = createContext({
  categories: [],
  categoriesLoading: true,
  categoriesError: false,
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesState, categoriesDispatch] = useReducer(categoriesReducer, {
    categories: [],
    categoriesLoading: true,
    categoriesError: false,
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  async function fetchCategories() {
    categoriesDispatch({ type: 'GET_CATEGORIES' })
    try {
      const categoriesData = await axios.get('api/categories')
      categoriesDispatch({
        type: 'GET_CATEGORIES_SUCCESS',
        payload: categoriesData?.data?.categories,
      })
    } catch (error) {
      categoriesDispatch({ type: 'GET_CATEGORIES_ERROR' })
    }
  }

  return (
    <CategoriesContext.Provider value={{ categoriesState }}>
      {children}
    </CategoriesContext.Provider>
  )
}

export const useCategories = () => useContext(CategoriesContext)
