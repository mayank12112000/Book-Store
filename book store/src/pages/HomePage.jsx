import React, { useEffect } from 'react';
import "./homePage.css"
import FeaturedCategory from '../components/FeaturedCategory';
import categoriesApi from '../features/categories/categoriesApi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesAsync } from '../features/categories/categorySlice';
import Spinner from '../components/Spinner';
const HomePage = () => {
  const {categories,error,status} = useSelector((state)=>state.categories)
  const dispatch = useDispatch()

  console.log("categories homepage",categories)
  console.log("error",error)
  console.log("status",status)

  useEffect(()=>{
    dispatch(fetchCategoriesAsync())
  },[dispatch]) // since dispatch will never change during component lifetime useeffect will only run when component mounts
  return (
    <div className='homepage'>
      <div className='image-box'>
      <div className='image-container'>
        <div className='text-area'>
          <h2>Welcome to Bookify!</h2>
          <h1>Find all your knowledge here!</h1>
          <button className='btn'>Shop now</button>
        </div>
      </div>
      </div>
      <h1 className='featured-heading'>Featured Books</h1>
      <div className='category-box'>

      <div className='category-container'>
      {
        status === "loading"?(<Spinner/>):status==="failed"?(<div>failed to load category</div>):(
          categories.map((category)=><FeaturedCategory key={category.name}/>)
        )
      }
      </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At temporibus dignissimos reiciendis eos, minus laboriosam enim eligendi quaerat odio repudiandae? Velit, repudiandae cumque. Unde eius dolore, quis tempora nesciunt assumenda.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At temporibus dignissimos reiciendis eos, minus laboriosam enim eligendi quaerat odio repudiandae? Velit, repudiandae cumque. Unde eius dolore, quis tempora nesciunt assumenda.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At temporibus dignissimos reiciendis eos, minus laboriosam enim eligendi quaerat odio repudiandae? Velit, repudiandae cumque. Unde eius dolore, quis tempora nesciunt assumenda.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At temporibus dignissimos reiciendis eos, minus laboriosam enim eligendi quaerat odio repudiandae? Velit, repudiandae cumque. Unde eius dolore, quis tempora nesciunt assumenda.</p>
    </div>
  );
};

export default HomePage;
