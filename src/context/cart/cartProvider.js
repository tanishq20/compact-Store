import { createContext, useContext, useReducer, useEffect } from 'react'
import { getFromCart } from '../../apiCalls'
import { cartReducer } from '../../reducer'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cartItems: [] })
  const { cartResponse, cartError, cartLoading } = getFromCart()

  useEffect(() => {
    cartDispatch({ type: 'SET_CART_ITEM', payload: cartResponse.cart || [] })
  }, [cartResponse])

  return (
    <CartContext.Provider
      value={{ cartState, cartDispatch, cartLoading, cartError }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
