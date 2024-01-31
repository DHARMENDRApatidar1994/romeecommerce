import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import Navbar from './components/Navbar'
import Cart from './components/Cart'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/Album/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App