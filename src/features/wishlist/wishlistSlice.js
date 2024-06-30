import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import wishlistApi from "./wishlistApi"
const initialState = {
    wishList : [],
    status:"idle",
    error: null
}

export const fetchFromWishlistAsync = createAsyncThunk(
    "wishlistasyncfetch",
    ()=>{
        try {
            const resp = wishlistApi;
            console.log(resp)
            
        } catch (error) {   
            console.log("error from wishlist async thunk:",error)
            return error
        }
    }
)

const wishlistSlice = createSlice({
    name:"wishList",
    initialState,
    reducers:{
        addToWishlist:(state,action)=>{
            // console.log("reducer payload",action.payload)
            state.wishList.push(action.payload)
        },
        removerFromWishlist:(state,action)=>{
            state.wishList = state.wishList.filter((book)=>book.id !== action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchFromWishlistAsync.fulfilled,(state,action)=>{
            state.wishList = aciton.payload;
            state.error = null;
            state.status = success;
        })
        .addCase(fetchFromWishlistAsync.pending,(state,action)=>{
            state.error = null;
            state.status = "pending";
        })
        .addCase(fetchFromWishlistAsync.rejected,(state,action)=>{
            state.error = action.error.message
            state.wishList = null
        })
    }
})

export default wishlistSlice.reducer
export const {testReducerWishlist,addToWishlist,removerFromWishlist} = wishlistSlice.actions