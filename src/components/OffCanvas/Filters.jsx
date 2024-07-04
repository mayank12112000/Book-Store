import React, { useEffect, useState } from 'react'
import "./filters.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesAsync } from '../../features/categories/categorySlice'
import { setFilterByCategory, setPriceFilter, setRatingFilter, setSearchBy, setSortBy } from '../../features/products/productsSlice'
import { useLocation } from 'react-router-dom'
export default function Filters() {
  const dispatch = useDispatch()
  const defaultFilters = {price:0,category:[],rating:null,sortBy:null}
  const [filterForm,setFilterForm] = useState(defaultFilters)
  const { categories } = useSelector((state) => state.categories)
  const {searchBook} = useSelector((state)=>state.products)

  useEffect(()=>{
    dispatch(fetchCategoriesAsync())
  },[])

  useEffect(()=>{
    dispatch(setFilterByCategory(filterForm.category))
    dispatch(setRatingFilter(filterForm.rating))
    dispatch(setSortBy(filterForm.sortBy))
    dispatch(setPriceFilter(filterForm.price))
  },[filterForm])


  const formChangeHandler=(e)=>{
    const {name,value,type,checked} = e.target
    setFilterForm((preData)=>{
      return {...preData,[name]:
        name==="category"? 
        (checked?
        [...preData.category,value]:
        [...preData.category.filter((cat)=>cat!== value)])
        :value}
    })
  }
  const clearFilter=()=>{
    setFilterForm(defaultFilters)
    dispatch(setSearchBy(""))
  }
  const searchHandler = (e)=>{
    dispatch(setSearchBy(e.target.value))
  }
  return (
    <form onSubmit={(e)=>e.preventDefault()} className="offcanvas offcanvas-start custom-offcanvas" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Filters</h5>
        <button onClick={clearFilter} type="reset" className='btn underline' data-bs-dismiss="offcanvas" aria-label="Close">Clear</button>
      </div>
      <div className="offcanvas-body " >
      <div className="search-bar" >
          <span className=" search-icon">🔍</span>
           <input onChange={searchHandler} value={searchBook} className="search-input" placeholder="   search book" type="text" />
        </div> <br/>
        <div className="filter-price">
          <b> <small>price:</small></b>
          <label htmlFor="customRange1" className="form-label price-ranges">
            <p> <small>100</small></p>
            <p> <small>500</small></p>
            <p> <small>1000</small></p>
          </label>
          <input onChange={formChangeHandler} name='price' value={filterForm.price} min={100} max={1000} type="range" className="form-range" id="customRange1" />
        </div> <br />

        <div className='filter-category'>
          <b> <small>Category:</small></b>
          {categories && categories.map((category, idx) => {
            return (
              <div key={idx} className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input onChange={formChangeHandler} name='category' checked={filterForm.category.includes(category.name)} value={category.name} type="checkbox" id={category.name} />
                <label  className="" htmlFor={category.name}><small> {category.name}</small></label>
              </div>
            )
          })}
        </div> <br />

        <div className="filter-rating">
          <div><b><small>Rating:</small></b></div>
          {[1,2,3,4].map((rating)=>{
            return(
          <div key={rating}>
            <input onChange={formChangeHandler} checked={filterForm.rating === rating.toString()} name='rating' type="radio" id={rating} value={rating}/>
            <label name='rating' htmlFor={rating}><small>{rating} star & above</small></label>
          </div>
            )
          })}
        </div> <br />

        <div className='sort-by'>
          <div><small> <b>Sort by:</b></small></div>
          <div>
            <input onChange={formChangeHandler} checked={filterForm.sortBy === '1'} name="sortBy" type="radio" id='asc' value={1}/>
            <label name="sortBy" htmlFor="asc"><small>Price-low to high</small></label>
          </div>
          <div>
            <input onChange={formChangeHandler} checked={filterForm.sortBy==='-1'} name="sortBy" type="radio" id='desc' value={-1}/>
            <label name="sortBy" htmlFor="desc"><small>Price-high to low</small></label>
          </div>

        </div>
      </div>
    </form>
  )
}
