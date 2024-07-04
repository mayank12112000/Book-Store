import { nanoid } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress, editAddress } from '../features/auth/authSlice'
import addressTestCredentials from "../features/auth/addressTestCredentials";

export default function AddOrEditAddress() {
    const [formData,setFormData] = useState({id:nanoid(),type:"",houseNo:"",city:"",State:"",Country:"",pinCode:"",mobile:""})
    const [action,setAction] = useState("add")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.user)
    const {addressId} = useParams();

    const changeHandler=(e)=>{
        const {name,value} = e.target
        setFormData((predata)=>{
            return {...predata,[name]:value}
        })
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        if(action==="add"){
            dispatch(addAddress(formData))
        }else{
            dispatch(editAddress({addressId,formData}))
        }
        navigate(-1)
    }
    useEffect(()=>{
        if(!user){
            navigate("/login")
        }
        // if address id is present then edit the details otherwise add the details
        else if(addressId){ // present in else if so that if user is not logged in it should not throw error
            setFormData(user.address.find((address)=>(address.id).toString()===addressId))
            setAction("edit")
        }
    },[user])

    const fillDummyData = () => {
        setFormData(addressTestCredentials); 
      };
        return (
            <div className='signuppage'>
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <br /><h2>Add Address</h2> 
        <form onSubmit={submitHandler}>
          <input required onChange={changeHandler} value={formData.type} type="text" className="fadeIn second" name="type" placeholder="Enter Name" autoComplete='name' />
          <input required onChange={changeHandler} value={formData.houseNo} type="text" className="fadeIn second" name="houseNo" placeholder="House no. , Road"  autoComplete='house-number'/>
          <input required onChange={changeHandler} value={formData.city} type="text" className="fadeIn second" name="city" placeholder="city"  autoComplete='city'/>
          <input required onChange={changeHandler} value={formData.State} type="text" className="fadeIn third" name="State" placeholder="State"  autoComplete='state'/>
          <input required onChange={changeHandler} value={formData.Country} type="text" className="fadeIn third" name="Country" placeholder="Country"  autoComplete='country'/>
          <input required onChange={changeHandler} value={formData.pinCode} type="text" className="fadeIn third" name="pinCode" placeholder="Pin code" autoComplete='pincode'/>
          <input required onChange={changeHandler} value={formData.mobile} type="text" className="fadeIn third" name="mobile" placeholder="Enter Mobile number"  autoComplete='mobile-number'/>
          <br />
          <div className="button-group-address" >
          <div className='dummy'>
          <button onClick={fillDummyData} type="button" className="btn btn-outline-warning">Fill with dummy data</button>
          </div>
            <div className='edit-cancel'>
          <button type='submit' className="btn btn-outline-primary">{action==="add"?"Add":"Edit"}</button>
          <button onClick={()=>navigate(-1)} type='button' className="btn btn-outline-danger" >Cancel</button>
            </div> 
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
