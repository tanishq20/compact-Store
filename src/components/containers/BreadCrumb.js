import { Link } from 'react-router-dom'

export const BreadCrumb = ({ page, url }) => {
  return (
    <ul className='pagination-nav d-flex align-items-center'>
      <li className='pagination-nav-item d-flex align-items-center'>
        <Link to={'/'}> Home </Link>
      </li>
      <i className='fa fa-solid fa-angle-right pagination-nav-icon' />
      <li className='pagination-nav-item d-flex align-items-center'>
        <Link to={`/${url}`}> {page} </Link>
      </li>
    </ul>
  )
}
