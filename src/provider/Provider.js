import {
  ProductsProvider,
  CategoriesProvider,
  FilterProvider,
  AuthProvider,
  CartProvider,
  WishlistProvider,
} from '../context'

export const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CategoriesProvider>
          <FilterProvider>
            <CartProvider>
              <WishlistProvider>{children}</WishlistProvider>
            </CartProvider>
          </FilterProvider>
        </CategoriesProvider>
      </ProductsProvider>
    </AuthProvider>
  )
}
