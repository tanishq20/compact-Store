import { useCart } from '../../context'
import style from './CartSummary.module.css'

export const CartSummary = () => {
  const { cartState } = useCart()
  const { cartItems } = cartState

  const deliveryCharge = 100
  const cartSummaryDetails = cartItems.reduce(
    (acc, cur) => ({
      ...acc,
      price: acc.price + cur.cardMainPrice * cur.qty,
      discount:
        acc.discount + (cur.cardMainPrice - cur.cardDiscPrice) * cur.qty,
      totalPrice:
        acc.price +
        cur.cardMainPrice * cur.qty -
        (acc.discount + (cur.cardMainPrice - cur.cardDiscPrice) * cur.qty),
      totalItems: acc.totalItems + cur.qty,
    }),
    { price: 0, discount: 0, totalPrice: 0, totalItems: 0 }
  )

  const { price, discount, totalPrice, totalItems } = cartSummaryDetails

  return (
    <div className={`${style.cart_price_wrapper} d-flex`}>
      <div className='products-section-change' />
      <div
        className={`${style.cart_price_details_wrapper} d-flex flex-col w-full rounded-5`}
      >
        <h4 className={style.cart_price_heading}>
          PRICE DETAILS: ({totalItems} items)
        </h4>
        <div className='products-section-change' />
        <div
          className={`${style.cart_item_details} d-flex justify-content-between`}
        >
          <p className={style.cart_item_desc}>Price</p>
          <p className={style.cart_item_price}>₹{price}</p>
        </div>
        <div
          className={`${style.cart_item_details} d-flex justify-content-between`}
        >
          <p className={style.cart_item_desc}>Discount</p>
          <p
            className={`${style.cart_item_price} ${style.cart_item_price_disc}`}
          >
            -₹{discount}
          </p>
        </div>
        <div
          className={`${style.cart_item_details} d-flex justify-content-between`}
        >
          <p className={style.cart_item_desc}>Delivery Charges</p>
          <p
            className={`${style.cart_item_price} ${style.cart_item_price_disc}`}
          >
            {deliveryCharge}
          </p>
        </div>
        <div className='products-section-change' />
        <div
          className={`${style.cart_item_details} d-flex justify-content-between`}
        >
          <p className={style.cart_item_total_amount_desc}>TOTAL AMOUNT</p>
          <p className={style.cart_item_total_price}>
            ₹{totalPrice + deliveryCharge}
          </p>
        </div>
        <div className='products-section-change' />
        <p className={style.cart_save_desc}>
          You will save ₹{discount} on this order
        </p>
        <button className='btn btn-primary w-full'>PLACE ORDER</button>
      </div>
    </div>
  )
}
