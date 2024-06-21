import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchFromCartAsync } from './cartSlice'
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
            <div class="col-6 pricing cart-boxes">.col-6 .col-sm-3</div>
          </div>
        </div>
      </div>
    </div>
  )
}
