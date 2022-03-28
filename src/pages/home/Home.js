import { Link } from 'react-router-dom'
import { Banner } from '../../components'

export const Home = () => {
  return (
    <main>
      <Banner />
      <section>
        <div className='products-container d-flex flex-col'>
          <div className='products-showcase'>
            <div className='products-showcase-heading d-flex justify-content-between align-items-center flex-wrap'>
              <div>
                <h2 className='products-showcase-head'>Best of Electronics</h2>
                <p className='products-showcase-subhead'>
                  Devices and Accessories
                </p>
              </div>
              <div>
                <Link to={'/products'}>
                  <button className='btn btn-secondary'>View All</button>
                </Link>
              </div>
            </div>
            <div className='products-section-change' />
            <div className='products-showcase-items w-full d-flex justify-content-center align-items-center flex-wrap'>
              <h1>Categories</h1>
            </div>
          </div>
          <div className='products-showcase'>
            <div className='products-showcase-heading d-flex justify-content-between align-items-center flex-wrap'>
              <div>
                <h2 className='products-showcase-head'>New Arrivals</h2>
                <p className='products-showcase-subhead'>
                  Devices and Accessories
                </p>
              </div>
              <div>
                <Link to={'/products'}>
                  <button className='btn btn-secondary'>View All</button>
                </Link>
              </div>
            </div>
            <div className='products-section-change' />
            <div className='products-showcase-items w-full d-flex justify-content-center align-items-center flex-wrap'>
              <h1>Products</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
