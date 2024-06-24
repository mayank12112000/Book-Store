import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFromWishlistAsync } from './wishlistSlice'
import WishListProduct from './WishListProduct'
export default function WishlistPage() {

  const {user} = useSelector((state)=>state.user)
  const {books} = useSelector((state)=>state.products)
  const {wishList} = useSelector((state)=>state.wishlist)
  const navigate = useNavigate()
  const wishListBooks = wishList.map((wishlistBook)=>books.find((book)=>book.id === wishlistBook.id))
  useEffect(()=>{
    if(!user){ // user not found
      navigate("/login")
    }else{
      fetchFromWishlistAsync()
    }
  },[user])

  return (
    <div className='wishlist-container container'>
      {wishListBooks && wishListBooks.map((book)=><WishListProduct book={book} key={book.id}/>)}
    </div>
  )
}
