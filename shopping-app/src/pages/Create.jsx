import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/ProductContext'
import { Link } from 'react-router-dom'

export default function Create() {
  const { uniqueCategories } = useContext(ProductContext)
  const [formdata,setFormdata] = useState({title:"",image:"",price:"",category:"",description:""})
  console.log(formdata)
  const handleFormChange =(e)=>{
    const {name,value,type} = e.target;
    setFormdata((predata)=>{
      return {...predata,[name]:value}
    })
  }

  return (

    <form onSubmit={(e)=>e.preventDefault()} className='container d-flex flex-column my-5' style={{ width:"50%", borderRadius: "8px" }} >

      <h2 className="h4 mx-3 my-3 pb-2 mb-4 text-success ">
        Add New Product
      </h2>
      <div className='row g-3'>

        <div className="mb-3 col-md-6">
          <label htmlFor="title" className="form-label">TItle:</label>
          <input name='title' onChange={handleFormChange} value={formdata.title} type="text" className="form-control" id="title" placeholder="Enter title" />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="image" className="form-label">Image Link:</label>
          <input name='image' onChange={handleFormChange} value={formdata.image} type='text' className="form-control" id="image" rows="3" placeholder='Enter image link' />
        </div>
      </div>
      <div className="row g-3">

        <div className="mb-3 col-md-6">
          <label htmlFor="price" className="form-label">Price ($):</label>
          <input name='price' onChange={handleFormChange} value={formdata.price} type="number" className="form-control" id="price" placeholder="Enter price" />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="category" className="form-label">Category:</label>
          <select name='category' onChange={handleFormChange} value={formdata.category} className="form-select" aria-label="Default select example">
            {uniqueCategories && uniqueCategories.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea name='description' onChange={handleFormChange} value={formdata.description} className="form-control" id="description" rows="3"></textarea>
      </div>
      {/* title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic' */}
      <div className='container'>

    <button className='btn btn-outline-success my-31' style={{}}>Add</button>
    <Link to="/">
    <button className='btn  btn-outline-warning my-31 mx-3' style={{}}>Cancel</button>
    </Link>
      </div>
    </form>

  )
}
