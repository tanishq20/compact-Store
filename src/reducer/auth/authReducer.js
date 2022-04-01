export const authReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LOGIN_SUCCESS':
      return {
        ...state,
        userDetails: action.userDetailsPayload,
        encodedToken: action.encodedTokenPayload,
      }
    default:
      return state
  }
}
