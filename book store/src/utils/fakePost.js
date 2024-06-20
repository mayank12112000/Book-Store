export const fakePost = async(data)=>{
    const randomDelay = Math.floor(Math.random() * 1500)
    const shouldFail = Math.random() > 0.2
    return new Promise((resolve,reject)=>{
        if(shouldFail){
            reject(new Error("internal server errror"))
        }else{
            setTimeout(() => {
                resolve(data)
            }, randomDelay);
        }

    })
}