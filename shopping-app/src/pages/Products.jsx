import React, { useContext } from 'react'
import { ProductContext } from '../utils/ProductContext'
import ProductCard from '../components/ProductCard'

export default function Products() {
    const {products,setProducts} = useContext(ProductContext)
    console.log(products)
    console.log(setProducts)
  return (
    <div style={{ display: 'flex',flexDirection:"column", flexWrap: 'wrap', justifyContent: 'space-around' }}>
    {products && products.map((product)=><ProductCard key={product.id} product={product}/>)}
    </div>
  )
}
