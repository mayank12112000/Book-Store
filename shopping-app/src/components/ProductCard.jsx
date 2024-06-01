import React from 'react'
import { Link } from "react-router-dom"
import "./productCard.css"
export default function ProductCard({ product }) {
    return (
        <>
        <div className='container m-1' style={{color:"inherit",textDecoration:"none", overflow: "hidden", height: "18rem", width: "18rem", border: "2px solid black" }}>
            <Link to={`./product/${product.id}`}>
                <div className='zoom-container' style={{ margin:"5px",height: "80%", backgroundImage: `url("${product.image}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
            </Link>
                <p style={{fontWeight:"500"}}>{product.title}</p>
        </div>
        </>
    )
}
