import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCoupon } from '../features/coupon/couponSlice'
export default function CouponModal() {
  const [discounts,setDiscount] = useState([{id:1,name:"End of season", discount:50},{id:2,name:"First purchase discount",discount:10}])
  const dispatch = useDispatch()
  const {coupon} = useSelector((state)=>state.coupon)
  const handleApplyCoupon = (discount)=>{
    dispatch(addCoupon(discount))
  }
  console.log(coupon);
  return (
    <div style={{zIndex:"8000"}} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body coupons">
                  {discounts.map((discount)=>{
                    return (
                      <div>
                      <input checked={coupon?.id === discount.id} onClick={()=>handleApplyCoupon(discount)} type="radio" id={discount.name} name="discount" />
                      <label htmlFor={discount.name}>{`${discount.discount}% off: ${discount.name}`}</label>
                      </div>
                    )
                  })}
                </div>
                <div class="modal-footer">
                  <button type="button" onClick={()=>handleApplyCoupon(null)} class="btn btn-secondary" data-bs-dismiss="modal">{coupon ? `Clear`:`Close`}</button>
                  <button type="button" disabled={!coupon} class="btn btn-primary" data-bs-dismiss="modal">Apply</button>
                </div>
              </div>
            </div>
          </div>
  )
}
