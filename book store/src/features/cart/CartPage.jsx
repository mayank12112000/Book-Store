import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchFromCartAsync } from './cartSlice'
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import "./cartpage.css"
import CartProduct from './CartProduct'
export default function CartPage() {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) { // user not found
      navigate("/login")
    } else {
      dispatch(fetchFromCartAsync())
    }
  }, [user])
  return (
    <div className='cart-page'>
      <div className='cart-container'>
        <div class="container text-center product-cart-container">
          <div class="row">
            <div class="col-6 scrollable cart-boxes">
              <CartProduct/>
              <CartProduct/>
              <CartProduct/>
              <CartProduct/>
            </div>
            <div class="col-6 pricing cart-boxes">
              <ul class="coupon d-flex ">
                <p><LoyaltyIcon/> Have A Coupon ?</p>
                <button class="btn btn-outline-secondary coupon-btn">Apply</button>
              </ul>
              <h4 class="text-center">PRICE DETAILS</h4>
              <div class=" price-calculate">
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
              <div class="price-totalAmt">
                <h4>Total Amount</h4><h4>₹ 909.00</h4>
              </div>
              <p class="save-msg">You will save ₹ 1980.00 on this order</p>
              <button class="btn btn btn default add-cart">
                  Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
