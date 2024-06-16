import React, { useContext, useEffect } from 'react';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from './productsSlice';
import ProductCard from "../../components/ProductCard"
import "./productList.css"
const ProductListPage = () => {
  const {books,error,status} = useSelector((state)=>state.products)
  const dispatch = useDispatch()
  console.log("bookslice books:",books)
  console.log("bookslice state",status)
  console.log("bookslice error:",error)

  useEffect(()=>{
    dispatch(fetchProductsAsync())
  },[dispatch])

  return (
    <div className='product-list-container'>
      <div className="product-list-header">
        showing all products
      </div>
      <div className="responsive-grid">
      {(error !== null || status==="loading" || status==="failed")?
      <Loader/>
      :
      (books.map((book)=><div key={book.id} className='card'><ProductCard book={book}/></div>))
      }
      </div>
    
    </div>
  );
};

export default ProductListPage;
