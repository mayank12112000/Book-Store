import React, { useEffect } from 'react'
import "./filters.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesAsync } from '../../features/categories/categorySlice'
export default function Filters() {
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.categories)
  useEffect(()=>{
    dispatch(fetchCategoriesAsync())
  },[])
  console.log("cat",categories)
  return (
    <form className="offcanvas offcanvas-start custom-offcanvas" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Filters</h5>
        <button type="reset" className='btn underline' data-bs-dismiss="offcanvas" aria-label="Close">Clear</button>
      </div>
      <div className="offcanvas-body " >
        <div className="filter-price">
          <b> <small>price:</small></b>
          <label htmlFor="customRange1" className="form-label price-ranges">
            <p> <small>100</small></p>
            <p> <small>500</small></p>
            <p> <small>1000</small></p>
          </label>
          <input min={100} max={1000} type="range" className="form-range" id="customRange1" />
        </div> <br />

        <div className='filter-category'>
          <b> <small>Category:</small></b>
          {categories && categories.map((category, idx) => {
            return (
              <div key={idx} className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" id={category.name} />
                <label className="" htmlFor={category.name}><small> {category.name}</small></label>
              </div>
            )
          })}
        </div> <br />

        <div className="filter-rating">
          <div><b><small>Rating:</small></b></div>
          {[1,2,3,4,5].map((rating)=>{
            return(
          <div key={rating}>
            <input name='rating-filter' type="radio" id={rating} value={rating}/>
            <label name='rating-filter' htmlFor={rating}><small>{rating} star & above</small></label>
          </div>
            )
          })}
        </div> <br />

        <div className='sort-by'>
          <div><small> <b>Sort by:</b></small></div>
          <div>
            <input name="price-sort" type="radio" id='asc' value={5}/>
            <label name="price-sort" htmlFor="asc"><small>Price-low to high</small></label>
          </div>
          <div>
            <input name="price-sort" type="radio" id='desc' value={5}/>
            <label name="price-sort" htmlFor="desc"><small>Price-high to low</small></label>
          </div>

        </div>
      </div>
    </form>
  )
}
