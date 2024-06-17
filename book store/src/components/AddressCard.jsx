import React from 'react'

export default function AddressCard({address,mobile}) {
    const {type,houseNo,city,State,pinCode,Country} = address
  return (
    <div className='container'>
                <h3 className="title underline">My Address</h3>
                <div className='user-details'>
                    <h4>Admin</h4>
                    <p>{`${houseNo},${city},${State},${Country},${pinCode}`}</p>
                    <p>Phone number: {mobile}</p>
                    <button className='btn btn-outline-secondary'> <b>edit</b></button>
                    <button className='btn mx-3 btn-outline-danger'> <b>remove</b></button>
                </div>
            </div>
  )
}
