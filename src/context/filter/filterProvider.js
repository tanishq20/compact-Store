import { createContext, useContext, useReducer } from 'react'
import { filterReducer } from '../../reducer'
import { useProducts } from '../../context'

import {
  compose,
  categoriesFilter,
  outOfStockFilter,
  priceRangeFilter,
  ratingFilter,
  sortByFilter,
  fastDeliveryFilter,
} from './utils'

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: '',
    rating: 1,
    outOfStock: true,
    fastDelivery: false,
    priceRange: 100000,
    categories: [],
    fastDelivery: false,
  })

  const { productsState } = useProducts()
  const { products } = productsState

  const filteredProducts = compose(
    filterState,
    categoriesFilter,
    outOfStockFilter,
    priceRangeFilter,
    ratingFilter,
    sortByFilter,
    fastDeliveryFilter
  )(products)

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, filteredProducts }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
