import authSlice from "../features/auth/authSlice"
import categorySlice from "../features/categories/categorySlice"

const rootReducer = {
    categories:categorySlice,
    user:authSlice
}
export default rootReducer