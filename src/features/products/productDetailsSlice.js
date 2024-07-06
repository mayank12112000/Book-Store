import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import fetchBookApi from "./productDetailsApi"

const initialState = {
    book:null,
    status:"idle",
    error:null
}

export const fetchBookAsync = createAsyncThunk(
    "fetch book details",
    async (id)=>{
        const book = await fetchBookApi(id)
        console.log('book fetched:',book)
        return book
    }
)

const productDetailsSlice = createSlice({
    name:"productdetails slice",
    initialState,
    reducers:{
        setBookToNull:(state,action)=>{
            state.book = null
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchBookAsync.pending,(state,action)=>{
                state.status = "pending"
            })
            .addCase(fetchBookAsync.fulfilled,(state,action)=>{
                state.book = action.payload
            })
            .addCase(fetchBookAsync.rejected,(state,action)=>{
                state.error = action.error.message
                state.book = null
            })
    }
})

export default productDetailsSlice.reducer;
export const {setBookToNull} = productDetailsSlice.actions