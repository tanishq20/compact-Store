import {
  Banner,
  CategoryCard,
  HomepageSection,
  ProductCard,
} from '../../components'
import { useCategories, useProducts } from '../../context'

export const Home = () => {
  const { productsState } = useProducts()
  const { products } = productsState

  const { categoriesState } = useCategories()
  const { categories, categoriesLoading, categoriesError } = categoriesState

  return (
    <main>
      <Banner />
      <section>
        <div className='products-container d-flex flex-col'>
          <HomepageSection
            head='Best of Electronics'
            subhead='Devices and Accessories'
            url='products'
            btnText='View All'
          >
            {categoriesLoading ? (
              <h1>Loading...</h1>
            ) : (
              categories.map((categoriesDetails) => (
                <CategoryCard
                  key={categoriesDetails._id}
                  categoriesDetails={categoriesDetails}
                />
              ))
            )}
            {categoriesError && <h1>Oops....something went wrong🥲</h1>}
          </HomepageSection>
          <HomepageSection
            head='New Arrivals'
            subhead='Devices and Accessories'
            url='products'
            btnText='View All'
          >
            {products.slice(0, 4).map((productDetails) => (
              <ProductCard
                key={productDetails._id}
                productDetails={productDetails}
                horz={true}
                newBadge={true}
              />
            ))}
          </HomepageSection>
        </div>
      </section>
    </main>
  )
}
