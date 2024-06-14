import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {nanoid} from "nanoid"

export default function Create() {
  const navigate = useNavigate()
  const { uniqueCategories,products, setProducts} = null;
  const [product, setProduct] = useState({ title: "", image: "", price: "", category: uniqueCategories[0], description: "",rating:{rate:0,count:0} })
  const localJsonProducts = JSON.parse(localStorage.getItem("products"))
  console.log("local storage",localJsonProducts)
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setProduct((predata) => {
      return { ...predata, [name]: value }
    })
  }
console.log("final all products after addition:",products)
  const handleOnSubmit=(e,product)=>{
    console.log(product)
    const id = nanoid()
    setProducts([...localJsonProducts,{id:id,...product}])
    localStorage.setItem("products",JSON.stringify([...localJsonProducts,{id:id,...product}]))
     e.preventDefault()
     navigate("/")
  }

  return (
    <form onSubmit={(e)=>handleOnSubmit(e,product)} className='container d-flex flex-column my-5' style={{ width: "50%", borderRadius: "8px" }} >
      <h2 className="h4 mx-3 my-3 pb-2 mb-4 text-success ">
        Add New Product
      </h2>
      <div className='row g-3'>
        <div className="mb-3 col-md-6">
          <label htmlFor="title" className="form-label">TItle:</label>
          <input name='title' onChange={handleFormChange} value={product.title} type="text" className="form-control" id="title" placeholder="Enter title" />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="image" className="form-label">Image Link:</label>
          <input name='image' onChange={handleFormChange} value={product.image} type='url' className="form-control" id="image" rows="3" placeholder='Enter image link' />
        </div>
      </div>
      <div className="row g-3">
        <div className="mb-3 col-md-6">
          <label htmlFor="price" className="form-label">Price ($):</label>
          <input name='price' onChange={handleFormChange} value={product.price} type="number" className="form-control" id="price" placeholder="Enter price" />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="category" className="form-label">Category:</label>
          <select name='category' onChange={handleFormChange} value={product.category} className="form-select" aria-label="Default select example">
            {uniqueCategories && uniqueCategories.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea name='description' onChange={handleFormChange} value={product.description} className="form-control" id="description" rows="3"></textarea>
      </div>
      <div className='container'>

        <button className='btn btn-outline-success my-31' style={{}}>Add</button>
        <Link to="/">
          <button className='btn  btn-outline-warning my-31 mx-3' style={{}}>Cancel</button>
        </Link>
      </div>
    </form>

  )
}
