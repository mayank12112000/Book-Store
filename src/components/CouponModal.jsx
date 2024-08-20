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
    <div style={{zIndex:"8000"}} className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body coupons">
                  {discounts.map((discount)=>{
                    return (
                      <div key={discount.id}>
                      <input checked={coupon?.id === discount.id} onChange={()=>handleApplyCoupon(discount)} type="radio" id={discount.name} name="discount" />
                      <label htmlFor={discount.name}>{`${discount.discount}% off: ${discount.name}`}</label>
                      </div>
                    )
                  })}
                </div>
                <div className="modal-footer">
                  <button type="button" onClick={()=>handleApplyCoupon(null)} className="btn btn-secondary" data-bs-dismiss="modal">{coupon ? `Clear`:`Close`}</button>
                  <button type="button" disabled={!coupon} className="btn btn-primary" data-bs-dismiss="modal">Apply</button>
                </div>
              </div>
            </div>
          </div>
  )
}
