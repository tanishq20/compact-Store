import { Link } from 'react-router-dom'
import style from './CategoryCard.module.css'

export const CategoryCard = ({ categoriesDetails }) => {
  const { cardImg, cardName, categoryName } = categoriesDetails
  return (
    <div className={`${style.home_product_category} rounded-5`}>
      <Link to={`/products/${categoryName}`}>
        <div className='card-content rounded-5'>
          <img src={cardImg} alt={categoryName} className='ecomm-prod-image' />
        </div>
        <div
          className={`${style.home_product_category_overlay} d-hidden rounded-5`}
        >
          {cardName}
        </div>
      </Link>
    </div>
  )
}
