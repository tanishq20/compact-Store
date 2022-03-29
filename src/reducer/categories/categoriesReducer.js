export const categoriesReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return { ...state, categoriesLoading: true, categoriesError: false }
    case 'GET_CATEGORIES_SUCCESS':
      return { ...state, categoriesLoading: false, categories: action.payload }
    case 'GET_CATEGORIES_ERROR':
      return {
        ...state,
        categoriesLoading: false,
        categoriesError: true,
      }
    default:
      return { state }
  }
}
