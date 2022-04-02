export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART_ITEM':
      return { ...state, cartItems: action.payload }
    case 'SET_ADD_TO_CART':
      return { ...state, cartItems: action.payload }
    case 'INC_DESC_QTY':
      return { ...state, cartItems: action.payload }
    case 'REMOVE_FROM_CART':
      return { ...state, cartItems: action.payload }
    default:
      return { state }
  }
}
