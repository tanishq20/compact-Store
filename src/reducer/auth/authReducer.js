export const authReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LOGIN_SUCCESS':
      return {
        ...state,
        userLogin: true,
        userDetails: action.userDetailsPayload,
        encodedToken: action.encodedTokenPayload,
      }
    default:
      return state
  }
}
