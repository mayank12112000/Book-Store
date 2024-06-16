import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productsApi from "./productsApi";

const initialState = {
    books:[],
    status:"idle",
    error:null
}

export const fetchProductsAsync = createAsyncThunk(
    "products/fetchProducts",
    async ()=>{
        // try catch are commented here because error will be handled with the help of redux state
        // try { 
            const response = await productsApi;
            console.log("products slice async thunk resp:",response)
            return response
        // } catch (error) {
        //     console.log("products slice async thunk errror",error)
        //     return error
        // }
    }
)

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        testReducer:(state,action)=>{
            console.log(state.books)
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchProductsAsync.pending,(state,action)=>{
                state.status = "laoding",
                state.error = null
            })
            .addCase(fetchProductsAsync.fulfilled,(state,action)=>{
                state.status = "succeeded",
                state.books = action.payload
            })
            .addCase(fetchProductsAsync.rejected,(state,action)=>{
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export default productSlice.reducer
export const {testReducer} = productSlice.actions