import { Link } from 'react-router-dom'

export const HomepageSection = ({ children, head, subhead, url, btnText }) => {
  return (
    <div className='products-showcase'>
      <div className='products-showcase-heading d-flex justify-content-between align-items-center flex-wrap'>
        <div>
          <h2 className='products-showcase-head'>{head}</h2>
          <p className='products-showcase-subhead'>{subhead}</p>
        </div>
        <div>
          <Link to={`/${url}`}>
            <button className='btn btn-secondary'>{btnText}</button>
          </Link>
        </div>
      </div>
      <div className='products-section-change' />
      <div className='products-showcase-items w-full d-flex justify-content-center align-items-center flex-wrap'>
        {children}
      </div>
    </div>
  )
}
