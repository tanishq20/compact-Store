export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY':
      return { ...state, sortBy: action.payload }
    case 'RATING':
      return { ...state, rating: action.payload }
    case 'OUT_OF_STOCK':
      return { ...state, outOfStock: action.payload }
    case 'PRICE_RANGE':
      return { ...state, priceRange: action.payload }
    case 'CATEGORIES':
      return state.categories.includes(action.payload)
        ? {
            ...state,
            categories: state.categories.filter(
              (item) => item !== action.payload
            ),
          }
        : { ...state, categories: [...state.categories, action.payload] }
    case 'FAST_DELIVERY':
      return { ...state, fastDelivery: action.payload }
    case 'RESET_ALL':
      return {
        ...state,
        sortBy: '',
        rating: 1,
        outOfStock: true,
        priceRange: 100000,
        categories: [],
        fastDelivery: false,
      }
    default:
      return { state }
  }
}
