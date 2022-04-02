import axios from 'axios'
import { Toast } from '../../components'

export const incDescQuantity = async (
  productId,
  cartDispatch,
  incDescQuantity
) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('encodedToken'),
      },
    }
    const incOrDesc = {
      action: {
        type: incDescQuantity,
      },
    }
    const response = await axios.post(
      `/api/user/cart/${productId}`,
      incOrDesc,
      config
    )
    cartDispatch({ type: 'INC_DESC_QTY', payload: response.data.cart })
  } catch (error) {
    Toast('Something went wrong, try again later', 'error')
  }
}
