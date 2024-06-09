import { useContext } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
import Create from "./pages/Create"
import EditProduct from './pages/EditProduct'

 function App() {
  return (
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/product/:productId'element={<ProductDetails/>}/>
        <Route path='/edit/:productId'element={<EditProduct/>}/>
        <Route path='/category/:category'element={<Home/>}/>
        <Route path='/createProduct'element={<Create/>}/>
      </Routes>
  )
}

export default App
