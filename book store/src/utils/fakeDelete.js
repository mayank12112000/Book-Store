export const fakeDelete=async(data)=>{
    const randomDelay = Math.random()*1500
    const shouldFail = Math.random()<0.2
    return new Promise((resolve,reject)=>{
        if(shouldFail){
            reject(new Error("internal server error"))
        }else{
            resolve(data)
        }
    })
}