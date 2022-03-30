import { Routes, Route } from 'react-router-dom'
import { MockAPI } from '../mockMan'
import { Cart, Home, Login, Products, Signup, Wishlist } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/products' element={<Products />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/mockapi' element={<MockAPI />} />
    </Routes>
  )
}
