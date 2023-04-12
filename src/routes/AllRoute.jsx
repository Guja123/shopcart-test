import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Cart } from "../pages"

export const AllROute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home title="home"/>} />
      <Route path='/cart' element={<Cart title="Cart"/>}  />
    </Routes>
  )
}
