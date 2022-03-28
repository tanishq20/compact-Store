import { Banner, CategoryCard, HomepageSection } from '../../components'
import { useCategories } from '../../context'

export const Home = () => {
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
            <h1>Products</h1>
          </HomepageSection>
        </div>
      </section>
    </main>
  )
}
