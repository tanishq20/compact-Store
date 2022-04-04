import { Link } from 'react-router-dom'
import { getFromWishlist } from '../../apiCalls'
import { BreadCrumb, ProductCard, ShowcaseHeader } from '../../components'
import { useAuth, useWishlist } from '../../context'

export const Wishlist = () => {
  const { authState } = useAuth()
  const { userLogin } = authState

  const { wishlistState } = useWishlist()
  const { wishlistItems } = wishlistState

  const { wishlistLoading } = getFromWishlist()

  return (
    <main>
      {userLogin ? (
        <div className='products-wrapper'>
          <div className='products-showcase'>
            <BreadCrumb page='All Wishlist' url='wishlist' />
            <ShowcaseHeader
              heading='Showing All Wishlist'
              productsLoading={wishlistLoading}
              productLength={wishlistItems.length}
            />
            <div className='products-showcase-items w-full d-flex justify-content-center align-items-center flex-wrap'>
              {wishlistLoading ? (
                <h1>Loading...</h1>
              ) : (
                <>
                  {wishlistItems[0] ? (
                    wishlistItems.map((productDetails) => (
                      <ProductCard
                        key={productDetails._id}
                        productDetails={productDetails}
                        horz={false}
                        newBadge={false}
                      />
                    ))
                  ) : (
                    <h1>Add something in wishlist!</h1>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h1>
          You are not login.{' '}
          <Link to={'/login'} className='global-login-btn'>
            Login
          </Link>{' '}
          First to access wishlist!{' '}
        </h1>
      )}
    </main>
  )
}
