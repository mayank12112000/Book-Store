import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProductContext } from '../utils/ProductContext'

export default function Category({children}) {
    const {filterByCategory,setFilterByCategory} = useContext(ProductContext)
    console.log("filter by category",filterByCategory)
    console.log("setfilter",setFilterByCategory)
  return (
    <li onClick={()=>{setFilterByCategory(children)}}  style={{ marginLeft: "20px", padding: "3px 8px" }}>
        <NavLink activeStyle={{color:"red"}} to="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">◈ {children}</NavLink>
    </li>

  )
}
