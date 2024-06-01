import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()
export  function ProductProvider({children}) {
  const [products, setProducts] = useState(null)

  const fetchData =  async()=>{
    const response = await fetch("https://fakestoreapi.com/products/")
    if(response.ok){
      const data = await response.json()
      setProducts(data)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <ProductContext.Provider value={{products,setProducts}}>
      {children}
    </ProductContext.Provider>
  )
}
