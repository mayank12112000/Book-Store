import authSlice from "../features/auth/authSlice"
import categorySlice from "../features/categories/categorySlice"
import productsSlice from "../features/products/productsSlice"

const rootReducer = {
    categories:categorySlice,
    user:authSlice,
    products : productsSlice
}
export default rootReducer