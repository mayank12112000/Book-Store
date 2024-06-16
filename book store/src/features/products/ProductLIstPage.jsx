import React, { useContext, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from './productsSlice';

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
    <div>
      product list page
    </div>
  );
};

export default ProductListPage;
