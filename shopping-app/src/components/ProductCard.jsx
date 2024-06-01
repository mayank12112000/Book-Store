import React from 'react'
import { Link } from "react-router-dom"
export default function ProductCard({product}) {
    return (
        <Link to={`./product/${product.id}`}>
            <div className='container m-1' style={{ height: "15rem", width: "15rem", border: "2px solid black" }}>
                <div style={{ height: "80%", backgroundImage: `url("${product.image}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
                <p >{product.title}</p>
            </div>
        </Link>
    )
}
