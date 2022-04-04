import { useEffect } from 'react'
import {
  addToWishlist,
  incDescQuantity,
  removeFromCart,
} from '../../../apiCalls'
import { useCart, useWishlist } from '../../../context'
import { Toast } from '../../../components'
import style from './CartCard.module.css'

export const CartCard = ({ productDetails, horz, newBadge }) => {
  const {
    _id,
    cardImg,
    cardHead,
    cardDesc,
    cardRating,
    cardDiscPrice,
    cardMainPrice,
    cardDiscPer,
    qty,
  } = productDetails

  useEffect(() => {
    qty >= 5 && Toast(`Only 5 unit(s) allowed in each order`, 'info')
  }, [qty])

  const { cartDispatch } = useCart()

  const { wishlistState, wishlistDispatch } = useWishlist()
  const { wishlistItems } = wishlistState

  const moveToWishlistHandler = () => {
    if (wishlistItems.find((item) => item._id === _id)) {
      removeFromCart(_id, cartDispatch)
    } else {
      addToWishlist(productDetails, wishlistDispatch)
      removeFromCart(_id, cartDispatch)
    }
    Toast(`Successfully moved ${cardHead} to wishlist`, 'success')
  }

  return (
    <div
      className={`rounded-5 ${horz ? 'ecomm-card-horz' : 'ecomm-card'} ${
        newBadge ? 'card-badge' : ''
      }`}
    >
      {newBadge && <div className='card-badge-item'>New</div>}
      <button
        className={`${style.trash_btn} position-absolute`}
        onClick={() => {
          removeFromCart(_id, cartDispatch)
          Toast(`Successfully removed ${cardHead} from your cart`, 'success')
        }}
      >
        <i className={`fa fa-solid fa-trash ${style.trash_btn_icon}`}></i>
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
          <div className={`${style.card_qty} d-flex align-items-center w-full`}>
            <p>Quantity:</p>
            <div className={`${style.card_qty_item} d-flex align-items-center`}>
              <button
                disabled={qty <= 1 ? true : false}
                className={`${style.card_qty_btn} d-flex ${
                  qty <= 1 ? 'disabled-btn' : ''
                }`}
                onClick={() => {
                  Toast(
                    `You've changed ${cardHead} QUANTITY to '${qty}'`,
                    'success'
                  )
                  incDescQuantity(_id, cartDispatch, 'decrement')
                }}
              >
                <i className='fa-solid fa-minus'></i>
              </button>
              <div>{qty}</div>
              <button
                disabled={qty >= 5 ? true : false}
                className={`${style.card_qty_btn} d-flex ${
                  qty >= 5 ? 'disabled-btn' : ''
                }`}
                onClick={() => {
                  Toast(
                    `You've changed ${cardHead} QUANTITY to '${qty}'`,
                    'success'
                  )
                  incDescQuantity(_id, cartDispatch, 'increment')
                }}
              >
                <i className='fa-solid fa-plus'></i>
              </button>
            </div>
          </div>
          <div className='card-footer'>
            <button
              className='btn btn-secondary-outline'
              onClick={moveToWishlistHandler}
            >
              Move to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
