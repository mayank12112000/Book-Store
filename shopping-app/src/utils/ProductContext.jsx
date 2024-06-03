import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null)
  const [category, setCategory] = useState(null)
  const [error,setError] = useState(null)
  const [uniqueCategories,setUniqueCategories] = useState()
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/")
      const data = await response.json()
      const categoryResponse = await fetch('https://fakestoreapi.com/products/categories')
      const allCategories = await categoryResponse.json()
      console.log("cat",allCategories)
      setCategory(allCategories)
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
  }, [])

  return (
    <ProductContext.Provider value={{ products, setProducts, error, uniqueCategories,category }}>
      {children}
    </ProductContext.Provider>
  )
}
