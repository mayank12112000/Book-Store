import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { ProductContext } from '../utils/ProductContext'
export default function ProductDetails() {
    const { productId } = useParams()
    const [singleData, setSingleData] = useState(null)
    const localStorageProducts = JSON.parse(localStorage.getItem("products"))
    useEffect(() => {
        setSingleData(localStorageProducts.find((product) => (product.id).toString() === productId))
    }, [productId])

    if (!singleData) {
        return (<Loading />)
    }
    const { image, title, description, price, rating, category } = singleData;

    return (
        <div style={{ width: "30rem", height: "100vh", display: "flex", justifyContent: "center" }}>
            <div style={{ margin: "auto", width: "30rem", display: "flex", justifyContent: "center", flexDirection: "row" }}>
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
                    {rating ? <p>Rating: {rating.rate}/5</p> : <p>No ratings</p>}
                    <div>{description}</div>
                    <div className='container'>
                        <Link to={`/edit/${productId}`}>
                            <button className="p-2 m-2 btn btn-outline-success">Edit </button>
                        </Link>
                        <button className="p-2 m-2 btn btn-outline-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
