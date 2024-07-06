import products from "../features/products/Products"

const fetchBook=(id)=>{
    const randomDelay = (Math.random()*1000)
    const shouldFail = Math.random() < 0
    return new Promise((resolve,reject)=>{
        if(shouldFail){
            reject("internal server error")
        }else{
            setTimeout(() => {
                console.log(products.find((product)=>(product.id).toString() === "1"))
                resolve(products.find((product)=>(product.id).toString() === id))
            }, randomDelay);
        }
    })
} 
export default fetchBook;