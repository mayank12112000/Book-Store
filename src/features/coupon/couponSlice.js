import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coupon: null
}
const coupon = createSlice({
    name :"coupon slice",
    initialState,
    reducers:{
        addCoupon: (state,action)=>{
            state.coupon = action.payload
        }
    }
})

export default coupon.reducer
export const {addCoupon} = coupon.actions