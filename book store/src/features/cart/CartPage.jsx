import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchFromCartAsync } from './cartSlice'
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import "./cartpage.css"
import CartProduct from './CartProduct'
export default function CartPage() {
  const {cart} = useSelector((state)=>state.cart)
  const { user } = useSelector((state) => state.user)
  const {books} = useSelector((state)=>state.products)
  const dispatch = useDispatch()
  // fetch book details using cart item id
  const cartBooks = cart.map((cartItem)=> {
    return {...(books.find((book)=>book.id === cartItem.id)),quantity:cartItem.quantity}
  })

  const cartPrice = cartBooks.reduce((total,book)=> total+(book.discountedPrice * book.quantity),0)
  console.log(cartPrice)
  console.log("cart books:",cartBooks)
  console.log(cart)

  // const cartItems = 
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) { // user not found
      navigate("/login")
    }
  }, [user])
  return (
    <div className='cart-page'>
      <div className='cart-container'>
        <div className="container text-center product-cart-container">
          <div className="row">
            <div className="col-6 scrollable cart-boxes">
              {cartBooks && cartBooks.map((cartbook)=><CartProduct book={cartbook} key={cartbook.id}/>) }
            </div>
            <div className="col-6 pricing cart-boxes">
              <ul className="coupon d-flex ">
                <p><LoyaltyIcon/> Have A Coupon ?</p>
                <button className="btn btn-outline-secondary coupon-btn">Apply</button>
              </ul>
              <h4 className="text-center">PRICE DETAILS</h4>
              <div className=" price-calculate">
                  <div className='price-category items-price'>
                    <span>Price (4 items)</span>
                    <span>₹ 2889</span>
                  </div>
                  <div className='price-category discount'>
                    <span>Discount</span>
                    <span>-₹ 1980</span>
                  </div>
                  <div className='price-category delivery-charges'>
                    <span>Delivery Charges</span>
                    <span>FREE</span>
                  </div>
                  <div className='price-category coupon-discount'>
                    <span>Coupon Discount</span>
                    <span>₹ 0.00</span>
                  </div>
              </div>
              <div className="price-totalAmt">
                <h4>Total Amount</h4><h4>₹ 909.00</h4>
              </div>
              <p className="save-msg">You will save ₹ 1980.00 on this order</p>
              <button className="btn btn btn default add-cart">
                  Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
