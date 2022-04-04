import axios from 'axios'
import { Toast } from '../../components'

export const addToWishlist = async (productDetails, wishlistDispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('encodedToken'),
      },
    }
    const response = await axios.post(
      `/api/user/wishlist`,
      { product: productDetails },
      config
    )
    wishlistDispatch({
      type: 'ADD_TO_WISHLIST',
      payload: response.data.wishlist,
    })
    Toast(
      `Successfully added ${productDetails.cardHead} to wishlist`,
      'success'
    )
  } catch (error) {
    Toast('Something went wrong, try again later.', 'error')
  }
}
