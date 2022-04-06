export const Badge = ({ badgeName, badgeCount }) => {
  return (
    <p className='badge position-relative'>
      <i className={`${badgeName} badge-icon`} />
      <span className='badge-content position-absolute sm-badge'>
        {badgeCount}
      </span>
    </p>
  )
}
