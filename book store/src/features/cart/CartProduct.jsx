import React from 'react'
import "./cartProduct.css"
import { useDispatch } from 'react-redux'
import { removeCartItem } from './cartSlice'
export default function CartProduct({ book }) {
    const dispatch = useDispatch()
    const removeFromCartHandler=()=>{
        dispatch(removeCartItem(book.id))
    }

    return (
        <div className='cart-product'>
            <div className="image-details row">
                <div className="image col-4">
                    <img className='card-image' src={`${book.imgLink}`} alt={book.title} />
                </div>
                <div className="details col-6">
                <h1 className='card-title-header'><big> {book.title}</big></h1>
                    <p className='author'>{book.author}</p>
                    <div className='price'>
                        <p className='disc-price'>{book.discountedPrice}</p>
                        <p className='actual-price'>{book.price}</p>
                        <p className='price-percentage'>{`(${book.discountPercentage}% off)`}</p>
                    </div>
                    <div className="quantity">
                        <div type="button" className="btn btn-outline-secondary minus">-</div>
                        <div className="btn number">1</div>
                        <div type="button" className="btn btn-outline-secondary plus">+</div>
                    </div>
                </div>
                <div className="buttons d-flex justify-content-between col-12 row">
                    <hr />
                    <div className="col-6 d-flex justify-content-center">
                        <button onClick={removeFromCartHandler} className='btn btn-outline-primary'>Remove</button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <button className='btn btn-outline-warning'>Add to wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
