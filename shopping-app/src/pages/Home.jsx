import React from 'react'
import SideBar from '../navbar/SideBar'
import Products from './Products'

export default function Home() {
  return (
    <div style={{display:"flex"}}>
    <SideBar/>
    <Products/>
    </div>
  )
}
