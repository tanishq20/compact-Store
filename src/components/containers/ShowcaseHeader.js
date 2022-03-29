export const ShowcaseHeader = ({ heading, productsLoading, productLength }) => {
  return (
    <>
      <div className='products-showcase-heading d-flex justify-content-between align-items-center flex-wrap'>
        <h2 className='products-showcase-head'>
          {heading}({productsLoading ? '' : productLength})
        </h2>
      </div>
      <div className='products-section-change' />
    </>
  )
}
