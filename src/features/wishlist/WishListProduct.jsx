import React from 'react'
import "./wishlistproduct.css"
import { removerFromWishlist } from './wishlistSlice'
import { addToCart } from '../cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function WishListProduct({book}) {
    const dispatch = useDispatch()
    const {cart} = useSelector((state)=>state.cart)
    const removeFromWishlistHandler=()=>{
        dispatch(removerFromWishlist(book.id))
    }

    const moveToCartHandler=()=>{
        // dispatch(removerFromWishlist(book.id))
        dispatch(addToCart({id:book.id,quantity:1})) 
    }
  return (
    <div className='cart-product wishlist-product'>
            <div className="image-details row">
                <div className="image col-4">
                    <Link to={`/product/${book.id}`}>
                    <img className='card-image' src={book.imgLink} alt={book.title} />
                    </Link>
                </div>
                <div className="details col-6">
                <h1 className='card-title-header'><big>{book.title}</big></h1>
                    <p className='author'>{book.author}</p>
                    <div className='price'>
                        <p className='disc-price'>{book.discountedPrice}</p>
                        <p className='actual-price'>{book.price}</p>
                        <p className='price-percentage'>{`(${book.discountPercentage}% off)`}</p>
                    </div>
                    
                </div>
                <div className="buttons d-flex justify-content-between col-12 row">
                    <hr />
                    <div className="col-6 d-flex justify-content-center">
                        <button onClick={removeFromWishlistHandler} className='btn btn-outline-primary'>Remove</button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        {
                            cart.find((cartbook)=>cartbook.id === book.id)?
                            <button disabled className='btn btn-outline-success'>Already in Cart</button>:
                            <button onClick={moveToCartHandler} className='btn btn-outline-warning'>Add to Cart</button>
                        }
                    </div>
                </div>
            </div>
        </div>
  )
}
