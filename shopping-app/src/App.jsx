import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './navbar/SideBar'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <div style={{display:'flex'}}>
    <SideBar/>
    <div style={{width:"85%"}} className='d-flex align-content-start flex-wrap'>
      <ProductCard/>
    </div>
    </div>
  )
}

export default App
