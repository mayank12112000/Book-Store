import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Category({children}) {
    const {filterByCategory,setProducts,setFilterByCategory} = null
    const handleOnClick=()=>{
      setProducts(null)
      console.log("children",children)
      setFilterByCategory(children)
    }
  return (
    <li onClick={handleOnClick}  style={{ marginLeft: "20px", padding: "3px 8px" }}>
        <NavLink activestyle={{color:"blue"}} to={`/category/${children}`} className="link-body-emphasis d-inline-flex text-decoration-none rounded">◈ {children}</NavLink>
    </li>
   
  )
}
