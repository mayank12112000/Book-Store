import fetchBook from "../../utils/fetchBook";

const fetchBookApi=(id)=>{
return fetchBook(id)
.then(res => res)
}
export default fetchBookApi