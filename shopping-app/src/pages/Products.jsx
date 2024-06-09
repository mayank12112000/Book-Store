import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/ProductContext'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'
import Error from './Error'
import { useParams } from 'react-router-dom'

export default function Products() {
    const categoryParam = useParams()
    const {filterByCategory} = useContext(ProductContext)
    console.log("category param", categoryParam)
    console.log("category param length", categoryParam.length)
    const [productsTOShow,setProductsToShow] = useState(null)
    let products = JSON.parse(localStorage.getItem("products"))
    
    useEffect(() => {
        console.log("caregory param length ",categoryParam)
        if(categoryParam.category){
            console.log("if executed")
            setProductsToShow(products.filter((product) => product.category === categoryParam.category))
        }else{
            console.log("else executed")
            setProductsToShow(products)
        }
        console.log("produtc to show", productsTOShow)
    },[filterByCategory])

    console.log("products by products.jsx1", products)
    console.log("parameter:", categoryParam.category)
    const { error } = useContext(ProductContext)
    console.log("error from use context::", error)
    if (error) {
        console.log(error.message)
        return (
            <Error errorMessage={error.message} />
        )
    }
    return productsTOShow ? (
        <div className='products-list' style={{ position: "relative", marginLeft: "14rem", display: "flex", flexWrap: "wrap", maxWidth: "100%" }}>
            {productsTOShow && productsTOShow.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
    ) : (<Loading />)
}
