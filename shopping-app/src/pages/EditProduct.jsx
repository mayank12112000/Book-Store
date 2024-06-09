import React, { useContext, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { ProductContext } from '../utils/ProductContext'

export default function EditProduct() {
    const { productId } = useParams()
    const { uniqueCategories, setProducts} = useContext(ProductContext)
    console.log(productId)
    const products = JSON.parse(localStorage.getItem("products"))
    const productToEdit = products.find((product) => (product.id).toString() === (productId))
    console.log("rpoduct to edit",productToEdit)
    const { id, title, description, rating, image, category,price } = productToEdit
    const [formData,setFormData] = useState({id:id,title:title,price:price,description:description,rating:rating,image:image,category:category})

    const handleFormChange=(e)=>{
        console.log(e.target)
    }
    return (
        <form onSubmit={(e) => handleOnSubmit(e, product)} className='container d-flex flex-column my-5' style={{ width: "50%", borderRadius: "8px" }} >
            <h2 className="h4 mx-3 my-3 pb-2 mb-4 text-success ">
                Add New Product
            </h2>
            <div className='row g-3'>
                <div className="mb-3 col-md-6">
                    <label htmlFor="title" className="form-label">TItle:</label>
                    <input name='title' onChange={handleFormChange} value={formData.title} type="text" className="form-control" id="title" placeholder="Enter title" />
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="image" className="form-label">Image Link:</label>
                    <input name='image' onChange={handleFormChange} value={formData.image} type='url' className="form-control" id="image" rows="3" placeholder='Enter image link' />
                </div>
            </div>
            <div className="row g-3">
                <div className="mb-3 col-md-6">
                    <label htmlFor="price" className="form-label">Price ($):</label>
                    <input name='price' onChange={handleFormChange} value={formData.price} type="number" className="form-control" id="price" placeholder="Enter price" />
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="category" className="form-label">Category:</label>
                    <select name='category' onChange={handleFormChange} value={formData.category} className="form-select" aria-label="Default select example">
                        {uniqueCategories && uniqueCategories.map((category) => <option key={category} value={category}>{category}</option>)}
                    </select>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea name='description' onChange={handleFormChange} value={formData.description} className="form-control" id="description" rows="3"></textarea>
            </div>
            <div className='container'>

                <button className='btn btn-outline-success my-31' style={{}}>Update</button>
                <Link to="/">
                    <button className='btn  btn-outline-warning my-31 mx-3' style={{}}>Cancel</button>
                </Link>
            </div>
        </form>

    )
}
