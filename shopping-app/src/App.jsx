import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './navbar/SideBar'
import ProductCard from './components/ProductCard'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'

function App() {
  return (
    <div style={{width:"85%",display:"flex"}} className='d-flex align-content-start flex-wrap'>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/product/1'element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
