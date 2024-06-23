import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./userProfile.css"
import ProfileDetails from '../components/ProfileDetails'
import AddressDetails from '../components/AddressDetails'
import { emptyCart } from '../features/cart/cartSlice'
export default function UserProfile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showUser, setShowUser] = useState(true)
    const { user } = useSelector((state) => state.user)
    console.log("user found:",user)
    useEffect(() => {
        if (!user) {
            navigate("/login")
            dispatch(emptyCart())
        }
    }, [dispatch,user])
    if(user){
        return (
            <div className='user-profile-container'>
            <div className='user-box'>
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input onChange={() => setShowUser(true)} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={showUser} />
                    <label className="btn btn-outline" htmlFor="btnradio1">Profile</label>
                    <input onChange={() => setShowUser(false)} type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" checked={!showUser} />
                    <label className="btn btn-outline" htmlFor="btnradio3">Address</label>
                </div>
                { showUser ? <ProfileDetails user={user} /> : <AddressDetails user={user}/>}
            </div>
        </div>
    )
}
}
