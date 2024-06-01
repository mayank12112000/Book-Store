import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/ProductContext'
export default function ProductDetails() {
    const { productId } = useParams()
    const { products } = useContext(ProductContext)
    const productSelected = products[productId - 1]
    const { image, title, description, price, rating, category } = productSelected;

    console.log(productId)
    return (

        <div className='container' style={{width: "70rem",display:"flex",justifyContent:"center",flexDirection:"row" }}>
            <div className="" style={{backgroundImage: `url("${image}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "600px", height: "20rem", border: "1px black solid" }}>
            </div>
            <div style={{padding: "1rem", flexDirection: "column" }}>
                <h2>{title}</h2>
                <p>{category}</p>
                <p>Price: $ {price}</p>
                <div>{description}</div>
                <div className='container'>
                    <button className="p-2 m-2 btn btn-outline-success">Edit </button>
                    <button className="p-2 m-2 btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </div>

    )
}
