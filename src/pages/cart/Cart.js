import style from './Cart.module.css'
import {
  BreadCrumb,
  CartCard,
  CartSummary,
  ShowcaseHeader,
} from '../../components'
import { useAuth, useCart } from '../../context'
import { Link } from 'react-router-dom'
import { getFromCart } from '../../apiCalls'

export const Cart = () => {
  const { authState } = useAuth()
  const { userLogin } = authState

  const { cartState } = useCart()
  const { cartItems } = cartState

  const { cartLoading } = getFromCart()

  return (
    <main>
      {userLogin ? (
        <div className='products-page d-flex'>
          <div className='products-wrapper'>
            <div className='products-showcase'>
              <BreadCrumb page='Cart' url='cart' />
              <ShowcaseHeader
                heading='My Cart'
                productsLoading={cartLoading}
                productLength={cartItems.length}
              />
              {cartLoading ? (
                <h1>Loading...</h1>
              ) : (
                <>
                  {cartItems[0] ? (
                    <div
                      className={`${style.cart_wrapper} d-flex justify-content-center flex-wrap w-full`}
                    >
                      <div
                        className={`${style.cart_product_wrapper} d-flex justify-content-center align-items-center flex-col`}
                      >
                        {cartItems.map((productDetails) => (
                          <CartCard
                            key={productDetails._id}
                            productDetails={productDetails}
                            horz={true}
                            newBadge={false}
                          />
                        ))}
                      </div>
                      <CartSummary />
                    </div>
                  ) : (
                    <h1>Add something in cart!</h1>
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
          First to access cart!{' '}
        </h1>
      )}
    </main>
  )
}
