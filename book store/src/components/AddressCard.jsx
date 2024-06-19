import React from 'react'
import { useDispatch } from 'react-redux'
import { removeAddress } from '../features/auth/authSlice'

export default function AddressCard({address,mobile}) {
    const {id,type,houseNo,city,State,pinCode,Country} = address
    const dispatch = useDispatch()


  return (
    <div className='container'>
                <div className='user-details'>
                    <h4><small>{type}:</small></h4>
                    <p>{`${houseNo},${city},${State},${Country},${pinCode}`}</p>
                    <p>Phone number: {mobile}</p>
                    <button className='btn btn-outline-secondary'> <b>edit</b></button>
                    <button onClick={()=>dispatch(removeAddress(id))} className='btn mx-3 btn-outline-danger'> <b>remove</b></button>
                </div>
                <hr />
            </div>
  )
}
