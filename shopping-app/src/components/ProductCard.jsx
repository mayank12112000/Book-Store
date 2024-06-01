import React from 'react'
import { Link } from "react-router-dom"
export default function ProductCard({ product }) {
    return (
        <div className='container m-1' style={{ overflow: "hidden", height: "15rem", width: "15rem", border: "2px solid black" }}>
            <Link to={`./product/${product.id}`}>
                <div style={{ height: "80%", backgroundImage: `url("${product.image}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
                <p>{product.title}</p>
            </Link>
        </div>
    )
}
