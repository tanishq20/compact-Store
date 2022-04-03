import {
  ProductsProvider,
  CategoriesProvider,
  FilterProvider,
  AuthProvider,
  CartProvider,
} from '../context'

export const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CategoriesProvider>
          <FilterProvider>
            <CartProvider>{children}</CartProvider>
          </FilterProvider>
        </CategoriesProvider>
      </ProductsProvider>
    </AuthProvider>
  )
}
