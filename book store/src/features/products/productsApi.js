import products from "./Products"
import fakeFetch from "../../utils/fakeFetchdb"

export default  fakeFetch(products)
.then(response=>response)
// .catch(error=>error) //if we will catch the error promise response will be fulfilled and not rejected
