import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./ProductCard.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { addToWishlist, removerFromWishlist } from '../features/wishlist/wishlistSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
const ProductCard = ({ book }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const { cart } = useSelector((state) => state.cart)
  const { wishList } = useSelector((state) => state.wishlist)
  const navigate = useNavigate()

  const addTOWishList = () => {
    if (user) {
      dispatch(addToWishlist({ id: book.id }))
    } else {
      navigate("/login")
    }
  }

  const removeWishlistitem = () => {
    dispatch(removerFromWishlist(book.id))
  }
  const addToCartHandler = () => {
    if (user) {
      dispatch(addToCart({ id: book.id, quantity: 1 }))
      // we will not include price of the book because it can change with time 
    } else {
      navigate("/login")
    }
  }

  const isInWishlist = wishList.find((wishlistproduct) => wishlistproduct.id === book.id)
  return (
    <div className='product-card-box'>
      <div className='product-img-card'>
        <Link to={`/product/${book.id}`}>
          <img className='card-img' src={book.imgLink} alt={book.title} />
        </Link>
        {isInWishlist ?
          <span className=' btn-primary'>
            <big onClick={removeWishlistitem} className='wishlist-icon'> <big> <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} /></big></big>
          </span>
          : <span onClick={addTOWishList} className=' btn-primary'>
            <big className='wishlist-icon'> <big> <FontAwesomeIcon icon={faHeart} /></big></big>
          </span>
        }
      </div>
      <div className='info'>
        <div className='card-title'>
          <h3 className='card-title-header'>{book.title}</h3>
          <div className="rating">
            <p className='rated'>{book.rating}</p>
             <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <p className='author'>{book.author}</p>
        <div className='price'>
          <p className='disc-price'>₹{book.discountedPrice}</p>
          <p className='actual-price'>{book.price}</p>
          <p className='price-percentage'>{`(${book.discountPercentage}% off)`}</p>
        </div>
        {cart.find((cartItem) => cartItem.id === book.id) ?
          <button onClick={() => navigate("/cart")} className='btn default add-cart'>
            <ShoppingCartOutlinedIcon />Go to cart
          </button> :
          <button onClick={addToCartHandler} className='btn default add-cart'>
            <ShoppingCartOutlinedIcon />Add to cart
          </button>}
      </div>

    </div>
  );
};

export default ProductCard;
