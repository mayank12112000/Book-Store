import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Loading from '../components/Loading'
export default function ProductDetails() {
    const { productId } = useParams()
    const [singleData,setSingleData] = useState(null)
    const getSingleProduct = async()=>{
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        if(response.ok){
            const signleProduct = await response.json()
            setSingleData(signleProduct)
            console.log(signleProduct)
        }
    }
    useEffect(()=>{
        getSingleProduct()
    },[productId])

    
    console.log(productId)
    if(!singleData){
        return(<Loading/>)
    }
    const { image, title, description, price, rating, category } = singleData;
    
    return(
        <div style={{ width: "30rem", height: "100vh", display: "flex", justifyContent: "center"}}>
            <div style={{margin:"auto",width:"30rem",display: "flex", justifyContent: "center", flexDirection: "row" }}>
                <div className=""
                    style={{
                        backgroundImage: `url("${image}")`,
                        backgroundSize: "contain", backgroundPosition: "center",
                        backgroundRepeat: "no-repeat", width: "800px", height: "20rem",
                        border: "1px black solid"
                    }}>
                </div>
                <div style={{ padding: "1rem", flexDirection: "column" }}>
                    <h2>{title}</h2>
                    <p>Category: {category}</p>
                    <p>Price: $ {price}</p>
                    <p>Rating: {rating.rate}/5</p>
                    <div>{description}</div>
                    <div className='container'>
                        <button className="p-2 m-2 btn btn-outline-success">Edit </button>
                        <button className="p-2 m-2 btn btn-outline-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
