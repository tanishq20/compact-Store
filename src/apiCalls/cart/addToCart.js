import axios from 'axios'
import { Toast } from '../../components'

export const addToCart = async (productDetails, cartDispatch, cartItems) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('encodedToken'),
      },
    }
    const response = await axios.post(
      '/api/user/cart',
      { product: { ...productDetails, qty: 1 } },
      config
    )

    cartDispatch({ type: 'SET_ADD_TO_CART', payload: response.data.cart })
    Toast(`Successfully added ${productDetails.cardHead} to cart`, 'success')
  } catch (error) {
    Toast('Oops..Item not added in cart', 'error')
  }
}
