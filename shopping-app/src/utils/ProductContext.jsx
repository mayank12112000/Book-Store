import React, { createContext, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ProductContext = createContext()
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null)
  const [error,setError] = useState(null)
  const [uniqueCategories,setUniqueCategories] = useState(null)
  const [filterByCategory,setFilterByCategory] = useState("")
  const filterUrl = filterByCategory === ""?"": `category/${filterByCategory}`
  const localProducts = JSON.parse(localStorage.getItem("products"))
  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/`)
      const data = await response.json()
      const categoryResponse = localProducts? localProducts.map((product)=>product.category): await  (await fetch('https://fakestoreapi.com/products/categories')).json()
      const uniqueCategories = new Set(categoryResponse)
      setUniqueCategories([...uniqueCategories])
      setProducts(data)
      if(!localStorage.getItem("products")){ // condition for refresh
        localStorage.setItem("products",JSON.stringify(data))
        console.log("no local found")
      }else{
        console.log("local data, products:",JSON.parse(localStorage.getItem("products")))
      }
    } catch (error) {
      console.log("error is ::", error)
      setError(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [filterByCategory])

  return (
    <ProductContext.Provider value={{ products, setProducts, error, uniqueCategories,filterByCategory,setFilterByCategory }}>
      {children}
    </ProductContext.Provider>
  )
}
