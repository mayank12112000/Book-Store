import React from 'react'
import AddressCard from './AddressCard'

export default function AddressDetails({user}) {
    const {address,mobile} = user
    console.log(user)
    console.log("addreess:",address)
    
    return (
        <div className='profile-details'>
            {address && address.map((address)=>(
            <AddressCard mobile={mobile} address={address}/>
            ))}
            <hr />
            <button className='btn btn-primary'><b>+ Add address</b></button>
        </div>
    )
}
