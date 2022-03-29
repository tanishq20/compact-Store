export const productsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, productsLoading: true, productsError: false }
    case 'GET_PRODUCTS_SUCCESS':
      return { ...state, productsLoading: false, products: action.payload }
    case 'GET_PRODUCTS_ERROR':
      return { ...state, productsLoading: false, productsError: true }
  }
}
