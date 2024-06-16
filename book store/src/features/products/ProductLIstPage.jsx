import React, { useContext, useEffect } from 'react';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from './productsSlice';
import ProductCard from "../../components/ProductCard"
import "./productList.css"
const ProductListPage = () => {
  // fetching products state variables from product slice
  const {books,error,status} = useSelector((state)=>state.products) 
  const dispatch = useDispatch()
  console.log("bookslice books:",books)
  console.log("bookslice state",status)
  console.log("bookslice error:",error)

  useEffect(()=>{
    dispatch(fetchProductsAsync()) // hitting to the api to fetch products as the components mounts
  },[dispatch])

  return (
    <div className='product-list-container'>
      <div className="product-list-header">
        showing all products
      </div>
      <div className="responsive-grid">
      {(error !== null || status==="loading" || status==="failed")? // in case of error/loading or failed status we will show the loader spinner
      <Loader/>
      :
      (books.map((book)=><div key={book.id} className='card'><ProductCard book={book}/></div>)) // if retrieval of products is successful we will map all products 
      }
      </div>
    
    </div>
  );
};

export default ProductListPage;
