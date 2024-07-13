import React, { useEffect } from 'react';
import "./homePage.css"
import FeaturedCategory from '../components/FeaturedCategory';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesAsync } from '../features/categories/categorySlice';
import Spinner from '../components/Spinner';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { setFilterByCategory } from '../features/products/productsSlice';
const HomePage = () => {
  const {categories,error,status} = useSelector((state)=>state.categories)
  const dispatch = useDispatch()
  console.log("error",error)

  useEffect(()=>{
    dispatch(fetchCategoriesAsync())
  },[dispatch]) // since dispatch will never change during component lifetime useeffect will only run when component mounts

  return (
    <div className='homepage'>
      <div className='image-box'>
      <div className='image-container'>
        <div className='text-area'>
          <h2 className='text-border'>Welcome to Bookify!</h2>
          <h1 className='text-border'>Find all your knowledge here!</h1>
          <Link to={'/products'}>
          <button className='btn'>Shop now</button>
          </Link>
        </div>
      </div>
      </div>
      <h1 className='featured-heading'>Featured Books</h1>
      <div className='category-box'>

      <div className='category-container'>
      {
        status === "loading"?(<Spinner/>):status==="failed"?(<div>failed to load category</div>):(
          categories.map((category)=> <Link className='feature-link' to="/products" key={category.name}><FeaturedCategory category={category}/></Link>)
        )
      }
      </div>
      </div>
      <Footer/>
      </div>
  );
};

export default HomePage;
