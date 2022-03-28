import { Link } from 'react-router-dom'
import style from './Header.module.css'

export const Header = () => {
  return (
    <header
      className={`header-container ${style.header_container} justify-content-between`}
    >
      <div className={`header-brand ${style.header_brand}`}>
        <img
          src='https://ik.imagekit.io/tanishq20/assets/logo/logo_9hi_XlJ7k.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645964002032'
          alt='logo'
        />
        <Link to={'/'} className={`header-logo ${style.header_logo}`}>
          Compact Store
        </Link>
      </div>
      <div className={`${style.header_src} d-flex`}>
        <input
          type='text'
          name='search'
          placeholder='What are you looking for?'
          className={style.header_src_input}
        />
        <button
          type='submit'
          className={`${style.header_src_btn} d-flex justify-content-center align-items-center`}
        >
          <i className='fa fa-search' />
        </button>
      </div>
      <nav className={`header-nav ${style.header_nav}`}>
        <ul className={`header-list ${style.header_list}`}>
          <Link
            to={'/mockapi'}
            className={`header-item ${style.header_item} d-flex flex-col align-items-center justify-content-center`}
          >
            <button className='btn btn-primary'>API Test</button>
          </Link>
          <Link
            to={'/login'}
            className={`header-item ${style.header_item} d-flex flex-col align-items-center justify-content-center`}
          >
            <button className='btn btn-primary'>Login</button>
          </Link>
          <Link
            to={'/wishlist'}
            className={`header-item ${style.header_item} d-flex flex-col align-items-center justify-content-center`}
          >
            <p className='badge position-relative'>
              <i className='fa fa-solid fa-heart badge-icon' />
              <span className='badge-content position-absolute sm-badge'>
                12
              </span>
            </p>
            <span className={style.header_item_text}>Wishlist</span>
          </Link>
          <Link
            to={'/cart'}
            className={`header-item ${style.header_item} d-flex flex-col align-items-center justify-content-center`}
          >
            <p className='badge position-relative'>
              <i className='fas fa-shopping-cart badge-icon' />
              <span className='badge-content position-absolute sm-badge'>
                1
              </span>
            </p>
            <span className={style.header_item_text}>Cart</span>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
