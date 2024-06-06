import React, { useContext } from 'react'
import { ProductContext } from '../utils/ProductContext'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'
import Error from './Error'

export default function Products() {
    const { products, setProducts,error } = useContext(ProductContext)
    console.log(products)
    console.log("error from use context::",error)
    if(error){
        console.log(error.message)
        return(
            <Error errorMessage={error.message}/>
        )
    }
    return products ?(
        <div className='products-list' style={{ position: "relative", marginLeft: "14rem", display: "flex", flexWrap: "wrap", maxWidth: "100%" }}>
            {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        ):(<Loading/>)
}
