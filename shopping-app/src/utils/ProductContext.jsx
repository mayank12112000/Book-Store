import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null)
  const [category, setCategory] = useState(null)
  const [error,setError] = useState(null)
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/")
      const data = await response.json()
      const allCategories = await data.map((product) => product.category)
      console.log(allCategories)
      setProducts(data)

    } catch (error) {
      console.log("error is ::", error)
      setError(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ProductContext.Provider value={{ products, setProducts, error }}>
      {children}
    </ProductContext.Provider>
  )
}
