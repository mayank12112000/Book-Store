import React, { useContext } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./ProductCard.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
const ProductCard = ({book}) => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.user)
  const {cart} = useSelector((state)=>state.cart)
  console.log("cart",cart)
  const navigate = useNavigate()
  const addToCartHandler=()=>{
    if(user){
      dispatch(addToCart({id:book.id,quantity:1})) 
      // we will not include price of the book because it can change with time 
    }else{
      navigate("/login")
    }
  }

  return (
    <div className='product-card-box'>
     <Link to={`/product/${book.id}`}>
    <div className='product-img-card'>
      <img className='card-img' src={book.imgLink} alt="ikigai" />
      <span className='wishlist-icon'><FavoriteBorderIcon/></span>
    </div>
    </Link>
    <div className='info'>
      <div className='card-title'>
        <h3  className='card-title-header'>{book.title}</h3>
        <div className="rating">
          <div className='rated'>{book.rating}</div>
          <StarBorderIcon className='star'/>
        </div>
      </div>
      <p className='author'>{book.author}</p>
      <div className='price'>
        <p className='disc-price'>{book.discountedPrice}</p>
        <p className='actual-price'>{book.price}</p>
        <p className='price-percentage'>{`(${book.discountPercentage}% off)`}</p>
      </div>
      {cart.find((cartItem)=>cartItem.id === book.id)?
              <button onClick={()=>navigate("/cart")} className='btn default add-cart'>
                <ShoppingCartOutlinedIcon/>Go to cart
              </button>:
        <button onClick={addToCartHandler} className='btn default add-cart'>
        <ShoppingCartOutlinedIcon/>Add to cart
      </button>}
    </div>

   </div>
  );
};

export default ProductCard;
