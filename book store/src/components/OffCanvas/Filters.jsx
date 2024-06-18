import React from 'react'
import "./filters.css"
import { useSelector } from 'react-redux'
export default function Filters() {
  const { categories } = useSelector((state) => state.categories)
  console.log(categories)
  return (
    <div className="offcanvas offcanvas-start custom-offcanvas" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Filters</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
          <div>
            <input type="radio" id='1' value={1}/>
            <label htmlFor="1"><small>1 star & above</small></label>
          </div>
          <div>
            <input type="radio" id='2' value={2}/>
            <label htmlFor="2"><small>2 star & above</small></label>
          </div>
          <div>
            <input type="radio" id='3' value={3}/>
            <label htmlFor="3"><small>3 star & above</small></label>
          </div>
          <div>
            <input type="radio" id='4' value={4}/>
            <label htmlFor="4"><small>4 star & above</small></label>
          </div>
          <div>
            <input type="radio" id='5' value={5}/>
            <label htmlFor="5"><small>5 star</small></label>
          </div>
        </div> <br />
        
        <div className='sort-by'>
          <div><small> <b>Sort by:</b></small></div>
          <div>
            <input type="radio" id='5' value={5}/>
            <label htmlFor="5"><small>Price-low to high</small></label>
          </div>
          <div>
            <input type="radio" id='5' value={5}/>
            <label htmlFor="5"><small>Price-high to low</small></label>
          </div>

        </div>
      </div>
    </div>
  )
}
