import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Product from './components/Product'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App