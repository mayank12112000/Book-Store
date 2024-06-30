import React from 'react'
import AddressCard from './AddressCard'
import { Link } from 'react-router-dom'

export default function AddressDetails({ user }) {
    const { address } = user

    return (
        <div className='profile-details'>
            <h3 className="title underline">My Address</h3>
            <hr />
            {address && address.map((address) => (
                <AddressCard key={address.id} address={address} />
            ))}
            <Link to={`address/`}>
            <button className='btn btn-primary'><b>+ Add address</b></button>
            </Link>
        </div>
    )
}
