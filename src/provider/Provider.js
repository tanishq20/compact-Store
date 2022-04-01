import {
  ProductsProvider,
  CategoriesProvider,
  FilterProvider,
  AuthProvider,
} from '../context'

export const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CategoriesProvider>
          <FilterProvider>{children}</FilterProvider>
        </CategoriesProvider>
      </ProductsProvider>
    </AuthProvider>
  )
}
