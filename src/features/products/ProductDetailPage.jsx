import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { addToCart } from '../cart/cartSlice';
import { addToWishlist } from '../wishlist/wishlistSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { fetchBookAsync, setBookToNull } from './productDetailsSlice';
import Loader from "../../components/Loader"
import "./productdetailspage.css"
export default function ProductDetailPage() {
  const { id } = useParams()
  const { books } = useSelector((state) => state.products)
  const {book,status,error} = useSelector((state)=>state.book)
  const dispatch = useDispatch()
  console.log(books)
  const { cart } = useSelector((state) => state.cart)
  const {wishList} = useSelector((state)=>state.wishlist)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setBookToNull()) // seting book details state to null when reloading for a new book so that previous book details was not able to show for a while
    if (books) {
      dispatch(fetchBookAsync(id))
    }
  },[dispatch,id])
  if(status === "pending"){
    return <Loader/>
  }
  if (status === "success" && error === null) return (
    <div className='product-details-container'>
      <div className='product-details-box row row-cols-2'>
        <div className="col">
          <img className='product-image' src={book.imgLink} alt={book.title} />
        </div>
        <div className="col book-details">
          <p><b>{book.title}</b></p>
          <div className="rating">
            <p className='rated'>{book.rating}</p>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className='price'>
            <p className='disc-price'>{book.discountedPrice}</p>
            <p className='actual-price'>{book.price}</p>
            <p className='price-percentage'>{`(${book.discountPercentage}% off)`}</p>
          </div>
          <hr />
          <div className='book-detail'>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Binding: {book.binding}</p>
            <p>Language: {book.language}</p>
          </div> <hr />
          {cart.find((cartBook) => cartBook.id === book.id) ?
            <button onClick={()=>navigate(`/cart`)} className='btn default add-cart'>
              <ShoppingCartOutlinedIcon />Go to cart
            </button>
            :
            <button onClick={()=>dispatch(addToCart({id:book.id,quantity:1}))} className='btn default add-cart'>
              <ShoppingCartOutlinedIcon />Add to cart
            </button>
          }
          {wishList.find((wishlistBook)=>wishlistBook.id === book.id)?
            <button onClick={()=>navigate("/wishlist")} className='btn btn-outline-secondary favorite-btn'>
            <FavoriteBorderIcon />Go to wishlist
          </button>
          :
            <button onClick={()=>dispatch(addToWishlist({id:book.id}))} className='btn btn-outline-secondary favorite-btn'>
            <FavoriteBorderIcon />Add to wishlist
          </button>
          }
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}
