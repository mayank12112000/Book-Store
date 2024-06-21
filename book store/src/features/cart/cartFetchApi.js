import fakeFetch from "../../utils/fakeFetchdb"

const cart = [] // suppose we have empty cart in db

export default fakeFetch(cart)
.then((response)=>{
    console.log("cart fetch api response:",response)
    return response
})
// we are not catching errror because it will be handled by reject status of promise through slice