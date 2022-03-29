import { useCategories, useFilter } from '../../context'
import { CheckboxInput } from '../../components'
import style from './Filter.module.css'

export const Filter = () => {
  const { filterState, filterDispatch } = useFilter()
  const {
    sortBy,
    rating,
    outOfStock,
    fastDelivery,
    priceRange,
    categories: filterCategories,
  } = filterState

  const { categoriesState } = useCategories()
  const { categories, categoriesLoading } = categoriesState
  return (
    <div className={style.filter_wrapper}>
      <div className={style.filter_showcase}>
        <div
          className={`${style.filter_heading} d-flex justify-content-between`}
        >
          <p className={style.filter_heading_left}>Filters</p>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            className={style.filter_heading_right}
            onClick={() => filterDispatch({ type: 'RESET_ALL' })}
          >
            Clear All
          </button>
        </div>
        <div className={style.products_section_change} />
        <div className={`${style.filter_content} overflow-y-auto`}>
          <div className={style.filter_subcontent}>
            <div className={style.filter_subcontent_heading}>Price</div>
            <div className={style.filter_subcontent_body}>
              <div
                className={`${style.filter_price} d-flex align-items-center justify-content-between`}
              >
                <div className='price-item'>₹10000</div>
                <div className='price-item'>to</div>
                <div className='price-item'>₹100000</div>
              </div>
              <div className='slider-wrapper'>
                <input
                  type='range'
                  min={10000}
                  max={100000}
                  step={10000}
                  className='slider'
                  list='price-range-datalist'
                  value={priceRange}
                  onChange={(e) =>
                    filterDispatch({
                      type: 'PRICE_RANGE',
                      payload: e.target.value,
                    })
                  }
                />
                <datalist id='price-range-datalist'>
                  <option value='10000' label='10000'></option>
                  <option value='20000'></option>
                  <option value='30000'></option>
                  <option value='40000'></option>
                  <option value='50000' label='50000'></option>
                  <option value='60000'></option>
                  <option value='70000'></option>
                  <option value='80000'></option>
                  <option value='90000'></option>
                  <option value='100000' label='100000'></option>
                </datalist>
              </div>
              <div
                className={`${style.filter_price} d-flex align-items-center justify-content-between`}
              >
                <div className='price-item'>{priceRange}</div>
              </div>
            </div>
          </div>
          <div className='products-section-change' />
          <div className={style.filter_subcontent}>
            <div className={style.filter_subcontent_heading}>Category</div>
            <div className={style.filter_subcontent_body}>
              <div className={`${style.filter_category} d-flex flex-col`}>
                {categoriesLoading ? (
                  <h1>Loading...</h1>
                ) : (
                  categories.map(({ _id, categoryName, cardName }) => (
                    <CheckboxInput
                      key={_id}
                      name={categoryName}
                      id={_id}
                      value={categoryName}
                      checked={filterCategories.includes(categoryName)}
                      cardName={cardName}
                      changeHandler={(e) =>
                        filterDispatch({
                          type: 'CATEGORIES',
                          payload: e.target.value,
                        })
                      }
                    />
                  ))
                )}
              </div>
            </div>
          </div>
          <div className='products-section-change' />
          <div className={style.filter_subcontent}>
            <div className={style.filter_subcontent_heading}>Rating</div>
            <div className={style.filter_subcontent_body}>
              <div className={`${style.filter_rating} d-flex flex-col`}>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='rating'
                    id='four-star-radio'
                    className='input-selector-field'
                    checked={rating === 4 ? true : false}
                    onChange={() =>
                      filterDispatch({ type: 'RATING', payload: 4 })
                    }
                  />
                  <label
                    htmlFor='four-star-radio'
                    className='input-selector-label'
                  >
                    4 Stars &amp; above
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='rating'
                    id='three-star-radio'
                    className='input-selector-field'
                    checked={rating === 3 ? true : false}
                    onChange={() =>
                      filterDispatch({ type: 'RATING', payload: 3 })
                    }
                  />
                  <label
                    htmlFor='three-star-radio'
                    className='input-selector-label'
                  >
                    3 Stars &amp; above
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='rating'
                    id='two-star-radio'
                    className='input-selector-field'
                    checked={rating === 2 ? true : false}
                    onChange={() =>
                      filterDispatch({ type: 'RATING', payload: 2 })
                    }
                  />
                  <label
                    htmlFor='two-star-radio'
                    className='input-selector-label'
                  >
                    2 Stars &amp; above
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='rating'
                    id='one-star-radio'
                    className='input-selector-field'
                    checked={rating === 1 ? true : false}
                    onChange={() =>
                      filterDispatch({ type: 'RATING', payload: 1 })
                    }
                  />
                  <label
                    htmlFor='one-star-radio'
                    className='input-selector-label'
                  >
                    1 Stars &amp; above
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='products-section-change' />
          <div className={style.filter_subcontent}>
            <div className={style.filter_subcontent_heading}>Sort By</div>
            <div className={style.filter_subcontent_body}>
              <div className={`${style.filter_sorting} d-flex flex-col`}>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='sort-price'
                    id='low-to-high'
                    className='input-selector-field'
                    checked={sortBy === 'LOW_TO_HIGH' ? true : false}
                    onChange={() =>
                      filterDispatch({
                        type: 'SORT_BY',
                        payload: 'LOW_TO_HIGH',
                      })
                    }
                  />
                  <label htmlFor='low-to-high' className='input-selector-label'>
                    Price - Low to High
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='sort-price'
                    id='high-to-low'
                    className='input-selector-field'
                    checked={sortBy === 'HIGH_TO_LOW' ? true : false}
                    onChange={() =>
                      filterDispatch({
                        type: 'SORT_BY',
                        payload: 'HIGH_TO_LOW',
                      })
                    }
                  />
                  <label htmlFor='high-to-low' className='input-selector-label'>
                    Price - High to Low
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='products-section-change' />
          <div className={style.filter_subcontent}>
            <div className={style.filter_subcontent_heading}>Availability</div>
            <div className={style.filter_subcontent_body}>
              <div className={`${style.filter_availability} d-flex flex-col`}>
                <div className='input-selector'>
                  <input
                    type='checkbox'
                    name='availability-filter'
                    id='availability-checkbox'
                    className='input-selector-field'
                    checked={outOfStock ? true : false}
                    onChange={(e) =>
                      filterDispatch({
                        type: 'OUT_OF_STOCK',
                        payload: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor='availability-checkbox'
                    className='input-selector-label'
                  >
                    Include Out of Stock
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='products-section-change' />
          <div className={style.filter_subcontent}>
            <div className={style.filter_subcontent_heading}>Delivery Type</div>
            <div className={style.filter_subcontent_body}>
              <div className={`${style.filter_availability} d-flex flex-col`}>
                <div className='input-selector'>
                  <input
                    type='checkbox'
                    name='delivery-filter'
                    id='delivery-checkbox'
                    className='input-selector-field'
                    checked={fastDelivery ? true : false}
                    onChange={(e) =>
                      filterDispatch({
                        type: 'FAST_DELIVERY',
                        payload: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor='delivery-checkbox'
                    className='input-selector-label'
                  >
                    Fast Delivery
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
