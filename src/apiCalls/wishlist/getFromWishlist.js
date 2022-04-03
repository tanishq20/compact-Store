import axios from 'axios'
import { useState, useEffect } from 'react'

export const getFromWishlist = () => {
  const [wishlistResponse, setWishlistResponse] = useState([])
  const [wishlistError, setWishlistError] = useState('')
  const [wishlistLoading, setWishlistLoading] = useState(true)

  useEffect(() => {
    fetchWishlistData()
  }, [])

  const fetchWishlistData = async () => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem('encodedToken'),
        },
      }
      const response = await axios.get(`/api/user/wishlist`, config)
      setWishlistResponse(response.data)
    } catch (error) {
      setWishlistError(error)
    } finally {
      setWishlistLoading(false)
    }
  }

  return { wishlistResponse, wishlistError, wishlistLoading }
}
