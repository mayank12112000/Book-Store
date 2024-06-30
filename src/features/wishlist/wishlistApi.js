import fakeFetch from "../../utils/fakeFetchdb"

const wishList = []

export default  fakeFetch(wishList)
.then((response)=>{
    console.log("wishlist fake fetch api response:",response)
    return response
})