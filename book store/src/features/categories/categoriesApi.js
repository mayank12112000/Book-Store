import fakeFetch from "../../utils/fakeFetch";
import categories from "./categoriesDb";

// fakeFetch(categories)
export default fakeFetch(categories)
.then(response=>{
    console.log("api response:",response)
    return response})
.catch(error=>{
    console.log("api error",error)
    return error})