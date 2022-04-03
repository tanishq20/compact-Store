export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WISHLIST':
      return { ...state, wishlistItems: action.payload }
    case 'ADD_TO_WISHLIST':
      return { ...state, wishlistItems: action.payload }
    case 'REMOVE_FROM_WISHLIST':
      return { ...state, wishlistItems: action.payload }
    default:
      return state
  }
}
