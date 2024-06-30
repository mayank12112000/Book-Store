import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

export default function ProfileDetails({user}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler=()=>{
    setTimeout(() => {
      
      navigate("/")
      dispatch(logout())
    }, 1000);
  }
  return (
    <div className='profile-details'>
      <h3 className="title underline">Profile Details</h3>
      <div className='user-details'>
        <div>
          <span> <b>Full name: </b> </span> <span>{user.name}</span>
        </div>
        <div>
          <span> <b>Email: </b> </span> <span>{user.email}</span>
        </div>
        <br />
        <button onClick={logoutHandler} className='btn btn-outline-danger'> <b>Logout</b></button>
      </div>
    </div>
  )
}
