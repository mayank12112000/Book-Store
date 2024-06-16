const fakeFetch = (data)=>{
    const randomDelay = Math.floor((Math.random()*3)+1)
    return new Promise((resolve,reject)=>{
    const internetSpeed = Math.floor((Math.random()*10)+1)

    setTimeout(() => {
            if(internetSpeed>2){
                resolve(data)
            }else{
                reject(new Error("internal server error"))
            }
            
        })
    }, randomDelay);
}

export default fakeFetch