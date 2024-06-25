import React, { useEffect } from 'react';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../features/products/productsSlice';
import ProductCard from "../components/ProductCard"
import "./productList.css"
import Filters from '../components/OffCanvas/Filters';
const ProductListPage = () => {
  // fetching products state variables from product slice
  const {books,error,status,categoryFilter,ratingFilter,sortBy,priceFilter} = useSelector((state)=>state.products) 
  const dispatch = useDispatch()
  console.log("bookslice books:",books)
  console.log("bookslice state",status)
  console.log("bookslice error:",error)
  console.log("category filter:",categoryFilter)
  console.log("sort by filter:",sortBy)
  console.log("price Filter:",priceFilter)
  console.log("rating Filter:",ratingFilter)

  let filteredBooks = books
  useEffect(()=>{
    dispatch(fetchProductsAsync()) // hitting to the api to fetch products as the components mounts
  },[dispatch,categoryFilter,ratingFilter,sortBy,priceFilter])


  if(categoryFilter.length>0){
    filteredBooks= filteredBooks.filter((book)=>categoryFilter.includes(book.category))
  }

  return (
    <div className='product-list-container'>
      <Filters/>
      <div className="product-list-header">
        showing all products
      </div>
      <div className="responsive-grid">
      
      {filteredBooks.length === 0 && <Loader/>}
      {/* {status === "failed" && <Loader/>} */}
      {status === "succeeded" && (filteredBooks.map((book)=><div key={book.id} className='card'><ProductCard book={book}/></div>))} 
      {/* // if retrieval of products is successful we will map all products  */}
   
      </div>
    
    </div>
  );
};

export default ProductListPage;
