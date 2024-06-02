import { useContext } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
import { ProductContext } from './utils/ProductContext'

 function App() {
  return (
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/product/:productId'element={<ProductDetails/>}/>
      </Routes>
  )
}

export default App
