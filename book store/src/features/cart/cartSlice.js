import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import cartFetchApi from "./cartFetchApi"

const initialState={
    cart:[],
    state:"idle",
    error:null
}

// fetching cart async function
export const fetchFromCartAsync = createAsyncThunk(
    "cart/fetchItem",
    async ()=>{
        try {
            const resp = await cartFetchApi;
            return resp
            console.log("async thunk fetch cart response:",resp)
        } catch (error) {
            console.log("error from async thunk fetch cart:",error)
            return error
        }
    }
)
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        emptyCart:(state,action)=>{
            state.cart = []
        },
        removeCartItem:(state,action)=>{
            state.cart = state.cart.filter((item)=>item.id !== action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchFromCartAsync.fulfilled,(state,action)=>{
                state.cart = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchFromCartAsync.rejected,(state,action)=>{
                state.error = action.error.message;
                state.error = "failed"
            })
            .addCase(fetchFromCartAsync.pending,(state,action)=>{
                state.status= "loading";
                state.error = null;
            })
    }
})

export default cartSlice.reducer
export const {addToCart,emptyCart,removeCartItem} = cartSlice.actions