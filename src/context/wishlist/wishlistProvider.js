import { createContext, useContext, useReducer, useEffect } from 'react'
import { getFromWishlist } from '../../apiCalls'
import { wishlistReducer } from '../../reducer'

const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlistItems: [],
  })

  const { wishlistResponse, wishlistError, wishlistLoading } = getFromWishlist()

  useEffect(() => {
    wishlistDispatch({
      type: 'SET_WISHLIST',
      payload: wishlistResponse.wishlist || [],
    })
  }, [wishlistResponse])

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        wishlistLoading,
        wishlistError,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
