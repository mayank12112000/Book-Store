import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductDetails() {
    return (
        <>
        <div className='d-flex container' style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <div class="card" style={{ }}>
                <img class="card-img-top" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Card image cap" />
            </div>
            <div style={{display: "flex", justifyContent: "center", padding: "1rem", flexDirection:"column" }}>
                <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
                <p>men's clothing</p>
                <p>Price: $ 109.95</p>
                <div>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</div>
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
