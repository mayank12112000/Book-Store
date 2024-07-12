import authSlice from "../features/auth/authSlice"
import cartSlice from "../features/cart/cartSlice"
import categorySlice from "../features/categories/categorySlice"
import couponSlice from "../features/coupon/couponSlice"
import productDetailsSlice from "../features/products/productDetailsSlice"
import productsSlice from "../features/products/productsSlice"
import wishlistSlice from "../features/wishlist/wishlistSlice"
// all reducers will be collected here
const rootReducer = {
    categories:categorySlice,
    user:authSlice,
    products : productsSlice,
    cart:cartSlice,
    wishlist:wishlistSlice,
    book:productDetailsSlice,
    coupon:couponSlice
}
export default rootReducer