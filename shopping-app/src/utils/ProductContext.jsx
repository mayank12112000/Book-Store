import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null)
  const [error,setError] = useState(null)
  const [uniqueCategories,setUniqueCategories] = useState(null)
  const [filterByCategory,setFilterByCategory] = useState("")
  const filterUrl = filterByCategory === ""?"": `category/${filterByCategory}`
  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${filterUrl}`)
      const data = await response.json()
      const categoryResponse = await fetch('https://fakestoreapi.com/products/categories')
      const allCategories = await categoryResponse.json()
      const uniqueCategories = new Set(allCategories)
      setUniqueCategories([...uniqueCategories])
      setProducts(data)

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
