import axios from 'axios'
import { useState, useEffect } from 'react'

export const getFromCart = () => {
  const [cartResponse, setCartResponse] = useState([])
  const [cartError, setCartError] = useState('')
  const [cartLoading, setCartLoading] = useState(true)

  useEffect(() => {
    fetchCartData()
  }, [])

  const fetchCartData = async () => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem('encodedToken'),
        },
      }
      const response = await axios.get(`/api/user/cart`, config)
      setCartResponse(response.data)
    } catch (error) {
      setCartError(error)
    } finally {
      setCartLoading(false)
    }
  }

  return { cartResponse, cartError, cartLoading }
}
