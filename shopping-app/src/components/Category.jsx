import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProductContext } from '../utils/ProductContext'

export default function Category({children}) {
    const {filterByCategory,setProducts,setFilterByCategory} = useContext(ProductContext)
    
    const handleOnClick=()=>{
      setProducts(null)
      setFilterByCategory(children)
    }
  return (
    <li onClick={handleOnClick}  style={{ marginLeft: "20px", padding: "3px 8px" }}>
        <NavLink activeStyle={{color:"red"}} to={`/category/${children}`} className="link-body-emphasis d-inline-flex text-decoration-none rounded">◈ {children}</NavLink>
    </li>

  )
}
