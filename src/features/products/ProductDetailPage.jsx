import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./productdetailspage.css"
import { addToCart } from '../cart/cartSlice';
import { addToWishlist } from '../wishlist/wishlistSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function ProductDetailPage() {
  const { id } = useParams()
  const { books } = useSelector((state) => state.products)
  const [bookFound, setBookFound] = useState(null)
  const { cart } = useSelector((state) => state.cart)
  const {wishList} = useSelector((state)=>state.wishlist)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (books) {
      setBookFound(books.find((book) => (book.id).toString() === id))
    }
  }, [])
  if (bookFound) return (
    <div className='product-details-container'>
      <div className='product-details-box row row-cols-2'>
        <div className="col">
          <img className='product-image' src={bookFound.imgLink} alt={bookFound.title} />
        </div>
        <div className="col book-details">
          <p><b>{bookFound.title}</b></p>
          <div className="rating">
            <p className='rated'>{bookFound.rating}</p>
            <FontAwesomeIcon icon={faStar} />
          </div>
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
          {cart.find((cartBook) => cartBook.id === bookFound.id) ?
            <button onClick={()=>navigate(`/cart`)} className='btn default add-cart'>
              <ShoppingCartOutlinedIcon />Go to cart
            </button>
            :
            <button onClick={()=>dispatch(addToCart({id:bookFound.id,quantity:1}))} className='btn default add-cart'>
              <ShoppingCartOutlinedIcon />Add to cart
            </button>
          }
          {wishList.find((wishlistBook)=>wishlistBook.id === bookFound.id)?
            <button onClick={()=>navigate("/wishlist")} className='btn btn-outline-secondary favorite-btn'>
            <FavoriteBorderIcon />Go to wishlist
          </button>
          :
            <button onClick={()=>dispatch(addToWishlist({id:bookFound.id}))} className='btn btn-outline-secondary favorite-btn'>
            <FavoriteBorderIcon />Add to wishlist
          </button>
          }
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}
