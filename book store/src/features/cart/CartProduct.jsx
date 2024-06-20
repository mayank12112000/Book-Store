import React from 'react'
import "./cartProduct.css"
export default function CartProduct() {
  return (
    <div className='cart-product'>
        <div className="image-details row">
            <div className="image col-4">
                <img className='card-image' src="https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_FMjpg_UX1000_.jpg" alt="" />
            </div>
            <div className="details col-6">
                <h3>do epic shit</h3>
                <p>ankur</p>
                <p><b>213 1534 45% off</b></p>
            <div className="quantity">
                <div type="button" className="btn btn-outline-secondary minus">-</div>
                <div className="btn number">1</div>
                <div type="button" className="btn btn-outline-secondary plus">+</div>
            </div> 
            </div>
            <div className="buttons d-flex justify-content-between col-12 row">
                <hr />
                <div className="col-6 d-flex justify-content-center">
                    <button className='btn btn-outline-primary'>remove</button>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <button className='btn btn-outline-warning'>add to wishlist</button>
                </div>
            </div>
        </div>
    </div>
  )
}
