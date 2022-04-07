import {
  BreadCrumb,
  Filter,
  ProductCard,
  ShowcaseHeader,
} from '../../components'
import { useFilter, useProducts } from '../../context'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const Products = () => {
  const { productsState } = useProducts()
  const { productsLoading, productsError } = productsState

  const { filterDispatch } = useFilter()

  const { category } = useParams()

  useEffect(() => {
    if (category !== undefined) {
      filterDispatch({ type: 'CATEGORIES', payload: category })
    } else {
      filterDispatch({ type: 'RESET_ALL' })
    }
  }, [])

  const { filteredProducts } = useFilter()

  return (
    <main>
      <div className='products-page d-flex'>
        <Filter />
        <div className='products-wrapper'>
          <div className='products-showcase'>
            <BreadCrumb page='All Products' url='products' />
            <ShowcaseHeader
              heading='Showing All Products'
              productsLoading={productsLoading}
              productLength={filteredProducts.length}
            />
            <div className='products-showcase-items w-full d-flex justify-content-center align-items-center flex-wrap'>
              {productsLoading ? (
                <h1>Loading...</h1>
              ) : (
                filteredProducts.map((productDetails) => (
                  <ProductCard
                    key={productDetails._id}
                    productDetails={productDetails}
                    horz={false}
                    newBadge={false}
                  />
                ))
              )}
              {productsError ? <h1>Opps...Try again later🥲</h1> : null}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
