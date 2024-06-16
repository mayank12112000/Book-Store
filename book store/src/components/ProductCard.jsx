import React, { useContext } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./ProductCard.css"
const ProductCard = () => {


  return (
   <div className='product-card-box'>
    <div className='product-img-card'>
      <img className='card-img' src="https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/0/6/q/ikigai-original-imag7kc7q5ugy2km.jpeg?q=70" alt="ikigai" />
      <span className='wishlist-icon'><FavoriteBorderIcon/></span>
    </div>
    <div className='info'>
      <div className='card-title'>
        <h3 className='card-title-header'>heading</h3>
        <div className="rating">
          <div className='rated'>3</div>
          <StarBorderIcon className='star'/>
        </div>
      </div>
      <p className='author'>author</p>
      <div className='price'>
        <p className='disc-price'>600</p>
        <p className='actual-price'>1500</p>
        <p className='price-percentage'>{"(60% off)"}</p>
      </div>
      <button className='btn default add-cart'>
        <ShoppingCartOutlinedIcon/>Add to cart
      </button>
    </div>

   </div>
  );
};

export default ProductCard;
