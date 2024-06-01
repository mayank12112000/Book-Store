import { useContext } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
import { ProductContext } from './utils/ProductContext'

 function App() {

 const {products,setProducts} =  useContext(ProductContext)
 console.log(products)
  return (
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/product/:productId'element={<ProductDetails products={products} setProducts={setProducts}/>}/>
      </Routes>
  )
}

export default App
