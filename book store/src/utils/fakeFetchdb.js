const randomDelay = ()=>{
    return Math.random() * 1500
}
const fakeFetch = (data)=>{
    return new Promise((resolve,reject)=>{
    const internetSpeed = Math.floor((Math.random()*10)+1)

    setTimeout(() => {
            if(internetSpeed>2){
                resolve(data)
            }else{
                reject(new Error("internal server error"))
            }
        },randomDelay())
    })
}

export default fakeFetch