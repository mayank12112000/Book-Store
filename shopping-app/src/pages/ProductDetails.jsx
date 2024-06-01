import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/ProductContext'
export default function ProductDetails() {
    const {productId} = useParams() 
    const {products} = useContext(ProductContext)
    const productSelected = products[productId -1]
    const {image,title,description,price,rating,category} = productSelected;

    console.log(productId)
    return (
        <>
        <div className='d-flex container' style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <div className="card" style={{ }}>
                <img className="card-img-top" src={image} alt="Card image cap" />
            </div>
            <div style={{display: "flex", justifyContent: "center", padding: "1rem", flexDirection:"column" }}>
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
            <Link to={"/"}>
            <button className='btn btn-success'>Home</button>
            </Link>
        </>
    )
}
