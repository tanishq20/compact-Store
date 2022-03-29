import {
  ProductsProvider,
  CategoriesProvider,
  FilterProvider,
} from '../context'

export const Provider = ({ children }) => {
  return (
    <ProductsProvider>
      <CategoriesProvider>
        <FilterProvider>{children}</FilterProvider>
      </CategoriesProvider>
    </ProductsProvider>
  )
}
