import React, { useEffect, useState } from 'react'

export default function Loading() {
    const [dots,setDots] = useState(1)
    const pattern = "."
    useEffect(()=>{
        setTimeout(() => {
            setDots((prevDots)=>(prevDots % 3) +1)
        }, 100);
    },[])
    return (
        <div className='container' style={{position: "relative", marginLeft: "14rem",display:"flex",justifyContent:"center",top:"20rem" }}>
            <h2>Loading{pattern.repeat(dots)}</h2>
        </div>
    )
}
