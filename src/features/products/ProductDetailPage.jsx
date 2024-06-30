import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import "./productdetailspage.css"
export default function ProductDetailPage() {
  const { id } = useParams()
  const { books } = useSelector((state) => state.products)
  const [bookFound, setBookFound] = useState(null)
  useEffect(() => {
    if (books) {
      setBookFound(books.find((book) => (book.id).toString() === id))
    }
  }, [])

  console.log(bookFound)
  if (bookFound) return (
    <div className='product-details-container'>
      <div className='product-details-box row row-cols-2'>
        <div className="col">
          <img className='product-image' src={bookFound.imgLink} alt={bookFound.title} />
        </div>
        <div className="col book-details">
          <p><b>{bookFound.title}</b></p>
          <p>{bookFound.rating}<StarOutlineIcon/></p>
          <div className='price'>
            <p className='disc-price'>{bookFound.discountedPrice}</p>
            <p className='actual-price'>{bookFound.price}</p>
            <p className='price-percentage'>{`(${bookFound.discountPercentage}% off)`}</p>
          </div>
          <hr />
          <div className='book-detail'>
            <p>Author: {bookFound.author}</p>
            <p>Category: {bookFound.category}</p>
            <p>Binding: {bookFound.binding}</p>
            <p>Language: {bookFound.language}</p>
          </div> <hr />
          <button className='btn default add-cart'>
            <ShoppingCartOutlinedIcon />Add to cart
          </button>
          <button className='btn btn-outline-secondary favorite-btn'>
            <FavoriteBorderIcon />Add to wishlist
          </button>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}
