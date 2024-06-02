import React from 'react'
export default function Error({errorMessage}) {
  return (
    <div className='container' style={{ position: "relative", marginLeft: "14rem", display: "flex", justifyContent: "center", top: "20rem" }}>
      <h2>{errorMessage}</h2>
    </div>
  )
}
