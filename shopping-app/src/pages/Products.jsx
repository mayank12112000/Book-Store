import React, { useContext } from 'react'
import { ProductContext } from '../utils/ProductContext'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'

export default function Products() {
    const { products, setProducts } = useContext(ProductContext)
    console.log(products)
    console.log(setProducts)
    return products ?(
        <div className='products-list' style={{ position: "relative", marginLeft: "14rem", display: "flex", flexWrap: "wrap", maxWidth: "100%" }}>
            {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        ):(<Loading/>)
}
