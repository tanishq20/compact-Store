import { Link } from 'react-router-dom'
import style from './Banner.module.css'

export const Banner = () => {
  return (
    <section>
      <div className='home-hero position-relative'>
        <div className={style.hero_img}>
          <img
            src='https://ik.imagekit.io/tanishq20/assets/home/hero_O5qmcYSht.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648403806009'
            alt='image'
            className='img-responsive'
          />
        </div>
        <div
          className={`${style.hero_content} d-flex flex-col align-items-center justify-content-center position-absolute`}
        >
          <p className={style.hero_head}>Discover the world of Gadgets.</p>
          <Link to={'/products'}>
            <button className={`${style.hero_content_btn} btn btn-primary`}>
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
