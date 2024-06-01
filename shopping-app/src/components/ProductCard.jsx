import React from 'react'
import {Link} from "react-router-dom"
export default function ProductCard() {
  return (
        <Link to={"./product/1"}>
    <div className='container m-1' style={{height:"15rem",width:"15rem",border:"2px solid black"}}>
      <div  style={{height:"80%",backgroundImage:`url("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")`,backgroundSize: "contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div>
      <p >Lorem ipsum dolor sit amet consectetur</p>
    </div>
        </Link>
  )
}
