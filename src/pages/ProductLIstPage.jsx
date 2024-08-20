import React, { useEffect, useMemo } from 'react';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../features/products/productsSlice';
import ProductCard from "../components/ProductCard"
import "./productList.css"
import Filters from '../components/OffCanvas/Filters';
const ProductListPage = () => {
  // fetching products state variables from product slice
  const {books,error,status,categoryFilter,ratingFilter,sortBy,priceFilter,searchBook} = useSelector((state)=>state.products) 
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProductsAsync()) // hitting to the api to fetch products as the components mounts
  },[categoryFilter,ratingFilter,sortBy,priceFilter,searchBook])
  console.log(status)
  const filtered =useMemo(()=>{

    let filteredBooks = books
    if(categoryFilter.length>0){
      filteredBooks= filteredBooks.filter((book)=>categoryFilter.includes(book.category))
    }
    
    if(ratingFilter){
      filteredBooks = filteredBooks.filter((book)=>book.rating >= Number.parseInt(ratingFilter))
    }
    if(priceFilter){
      filteredBooks = filteredBooks.filter((book)=>book.discountedPrice > Number.parseInt(priceFilter))
    }
    if(sortBy){
      filteredBooks = [...filteredBooks].sort((book1,book2)=>  ((sortBy)*book1.discountedPrice) - ((sortBy)*book2.discountedPrice))
    }
    if(searchBook.length>0){
      const regex = new RegExp(`${searchBook}`,"gi")
      filteredBooks = [...filteredBooks].filter((book)=>(book.title).match(regex) || book.author.match(regex)) 
    }
    return filteredBooks
  },[books,categoryFilter,ratingFilter,sortBy,priceFilter,searchBook] )

  return (
    <div className='product-list-container'>
      <Filters/>
      {(!filtered.length && status === "succeeded")&& 
      <h1 className='sorry-message'>Sorry , No products available.</h1>
      }
      <div className="responsive-grid">
      {status === "succeeded" ? (filtered.map((book)=><div key={book.id} className='card'><ProductCard book={book}/></div>)): <Loader/>} 
      {/* // if retrieval of products is successful we will map all products  */}
   
      </div>
    </div>
  );
};

export default ProductListPage;
