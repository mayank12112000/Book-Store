import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFromWishlistAsync } from './wishlistSlice'

export default function WishlistPage() {

  const {user} = useSelector((state)=>state.user)
  const navigate = useNavigate()


  useEffect(()=>{
    if(!user){ // user not found
      navigate("/login")
    }else{
      fetchFromWishlistAsync()
    }
  },[user])

  return (
    <div>
      wishlist Page
    </div>
  )
}
