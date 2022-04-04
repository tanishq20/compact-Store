import axios from 'axios'
import { Toast } from '../../components'

export const removeFromWishlist = async (productId, cartDispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('encodedToken'),
      },
    }
    const response = await axios.delete(
      `/api/user/wishlist/${productId}`,
      config
    )
    cartDispatch({
      type: 'REMOVE_FROM_WISHLIST',
      payload: response.data.wishlist,
    })
    Toast(`Successfully removed from wishlist`, 'success')
  } catch (error) {
    Toast('Something went wrong, try again later.', 'error')
  }
}
