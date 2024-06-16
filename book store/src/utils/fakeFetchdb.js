const fakeFetch = (data)=>{
    const internetSpeed = Math.floor((Math.random()*10)+1)
    const randomDelay = Math.floor((Math.random*3)+1)

    setTimeout(() => {
        return new Promise((resolve,reject)=>{
            if(internetSpeed>2){
                resolve(data)
            }else{
                reject("internal server error")
            }
            
        })
    }, randomDelay);
}

export default fakeFetch