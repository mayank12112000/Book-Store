import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import categoriesApi from "./categoriesApi"

// defining initital state
const initialState = {
    categories: [],
    status: "idle", // idle loading succeeded failed
    error: null
}

export const fetchCategoriesAsync = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        try {
            const resposne = await categoriesApi;
            console.log("async thunk response",resposne)
            return resposne
        } catch (error) {
            console.log("async thunk error",error)
            return error
        }
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        // if needed reducers will be here
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categories = action.payload; // update categories with fetched data
            })
            .addCase(fetchCategoriesAsync.pending, (state, action) => {
                state.status = "loading";
                state.error = null
            })
            .addCase(fetchCategoriesAsync.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = "failed"
            })
    }
})

export const { testReducer } = categorySlice.actions
export default categorySlice.reducer
