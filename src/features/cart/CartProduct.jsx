import React from 'react'
import "./cartProduct.css"
import { useDispatch } from 'react-redux'
import { removeCartItem, updateQuantity } from './cartSlice'
import { addToWishlist } from '../wishlist/wishlistSlice'
export default function CartProduct({ book }) {
    const dispatch = useDispatch()
    const removeFromCartHandler=()=>{
        dispatch(removeCartItem(book.id))
    }
    const addToWishListHandler=()=>{
        dispatch(addToWishlist({id:book.id}))
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
                        <button disabled={book.quantity === 1} onClick={()=>dispatch(updateQuantity({id:book.id,quant:-1}))} className={`btn btn-${book.quantity===1?"secondary":"primary"} minus`}>-</button>
                        <div className="btn number">{book.quantity}</div>
                        <button onClick={()=>dispatch(updateQuantity({id:book.id,quant:1}))} className="btn btn-primary plus">+</button>
                    </div>
                </div>
                <div className="buttons d-flex justify-content-between col-12 row">
                    <hr />
                    <div className="col-6 d-flex justify-content-center">
                        <button onClick={removeFromCartHandler} className='btn btn-outline-primary'>Remove</button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <button onClick={addToWishListHandler} className='btn btn-outline-warning'>Add to wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
