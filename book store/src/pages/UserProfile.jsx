import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function UserProfile() {
    const navigate = useNavigate()
    const {user} = useSelector((state)=>state.user)
    useEffect(()=>{
        if(!user){
            navigate("/login")
        }
    },[user,navigate])
  return (
    <div>
      user profile
    </div>
  )
}
