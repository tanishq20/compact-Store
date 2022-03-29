import { v4 as uuid } from 'uuid'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    cardImg:
      'https://ik.imagekit.io/tanishq20/assets/products/laptops/img-2_f54JhENqh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646379118823',
    categoryName: 'laptops',
    cardName: 'Laptops',
    description: '',
  },
  {
    _id: uuid(),
    cardImg:
      'https://ik.imagekit.io/tanishq20/assets/products/mobiles/img-2_iiJdMM1kO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646379117546',
    categoryName: 'mobiles',
    cardName: 'Mobiles',
    description: '',
  },
  {
    _id: uuid(),
    cardImg:
      'https://ik.imagekit.io/tanishq20/assets/products/watches/img-1_jf6gl642O.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646379116454',
    categoryName: 'watches',
    cardName: 'Watches',
    description: '',
  },
  {
    _id: uuid(),
    cardImg:
      'https://ik.imagekit.io/tanishq20/assets/products/cameras/img-2_iFLRmV7Tn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646379120176',
    categoryName: 'cameras',
    cardName: 'Cameras',
    description: '',
  },
]
