import { addToCart } from '../../../apiCalls'
import { useAuth, useCart } from '../../../context'
import { useNavigate } from 'react-router-dom'

export const ProductCard = ({ productDetails, horz, newBadge }) => {
  let navigate = useNavigate()
  const {
    _id,
    cardImg,
    cardHead,
    cardDesc,
    cardRating,
    cardDiscPrice,
    cardMainPrice,
    cardDiscPer,
  } = productDetails

  const { authState } = useAuth()
  const { userLogin } = authState

  const { cartState, cartDispatch } = useCart()
  const { cartItems } = cartState

  const addToCartHandler = () => {
    if (userLogin) {
      addToCart(productDetails, cartDispatch, cartItems)
    } else {
      navigate('../login', { replace: true })
    }
  }

  return (
    <div
      className={`rounded-5 ${horz ? 'ecomm-card-horz' : 'ecomm-card'} ${
        newBadge ? 'card-badge' : ''
      }`}
    >
      {newBadge && <div className='card-badge-item'>New</div>}
      <button className='wishlist-btn'>
        <i className='fas fa-heart wishlist-btn-icon' />
      </button>
      <div className='card-content rounded-5'>
        <div className={horz ? 'ecomm-card-horz-img' : ''}>
          <img src={cardImg} alt='camera_image' className='ecomm-prod-image' />
        </div>
        <div className='ecomm-card-body'>
          <div className='card-header rounded-5'>
            <h2 className='card-subhead'>{cardHead}</h2>
            <span className='card-header-tag'>{cardDesc}</span>
            <div className='ecomm-rating-badge'>
              <div className='rating-badge'>
                <span className='rating-badge-text'>{cardRating}</span>
                <i className='rating-badge-icon fas fa-star' />
              </div>
            </div>
          </div>
          <div className='card-item-price'>
            <span className='card-item-curr-price'>₹{cardDiscPrice}</span>
            <span className='card-item-disc-price'>₹{cardMainPrice}</span>
            <span className='card-item-disc-per'>{cardDiscPer}% off</span>
          </div>
          <div className='card-footer'>
            <button className='btn btn-primary'>BUY</button>
            {cartItems.find((item) => item._id === _id) ? (
              <button
                className='btn btn-default'
                onClick={() => navigate('/cart', { replace: true })}
              >
                Go To Cart
              </button>
            ) : (
              <button
                className='btn btn-secondary'
                onClick={() => addToCartHandler()}
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
