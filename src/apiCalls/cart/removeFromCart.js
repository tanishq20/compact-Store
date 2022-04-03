import axios from 'axios'
import { Toast } from '../../components'

export const removeFromCart = async (productId, cartDispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('encodedToken'),
      },
    }
    const response = await axios.delete(`/api/user/cart/${productId}`, config)
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: response.data.cart })
  } catch (error) {
    Toast(`Something went wrong.. try again later`, 'error')
  }
}
