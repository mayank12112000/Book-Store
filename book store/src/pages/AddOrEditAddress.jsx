import { nanoid } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import testCredentials from '../features/auth/testCredentials'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress } from '../features/auth/authSlice'
import addressTestCredentials from "../features/auth/addressTestCredentials";

export default function AddOrEditAddress() {
    const [formData,setFormData] = useState({id:nanoid(),type:"",houseNo:"",city:"",State:"",Country:"",pinCode:"",mobile:""})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.user)
    const changeHandler=(e)=>{
        const {name,value} = e.target
        setFormData((predata)=>{
            return {...predata,[name]:value}
        })
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(addAddress(formData))
        navigate("/user_profile")
    }
    useEffect(()=>{
        if(!user){
            navigate("/login")
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
          <input required onChange={changeHandler} value={formData.type} type="text" className="fadeIn second" name="type" placeholder="Enter Name" />
          <input required onChange={changeHandler} value={formData.houseNo} type="text" className="fadeIn second" name="houseNo" placeholder="House no. , Road" />
          <input required onChange={changeHandler} value={formData.city} type="text" className="fadeIn second" name="city" placeholder="city" />
          <input required onChange={changeHandler} value={formData.State} type="text" className="fadeIn third" name="State" placeholder="State" />
          <input required onChange={changeHandler} value={formData.Country} type="text" className="fadeIn third" name="Country" placeholder="Country" />
          <input required onChange={changeHandler} value={formData.pinCode} type="text" className="fadeIn third" name="pinCode" placeholder="Pin code" />
          <input required onChange={changeHandler} value={formData.mobile} type="text" className="fadeIn third" name="mobile" placeholder="Enter Mobile number" />
          <br />
          <div className="button-group container d-flex flex-row justify-content-around" >
          <button type='submit' className="btn btn-outline-primary" >Add</button>
          <button onClick={()=>navigate(-1)} type='button' className="btn btn-outline-danger" >Cancel</button>
          <button onClick={fillDummyData} type="button" className="btn btn-outline-warning">Fill with dummy data</button>
          </div>
        </form>
        <div id="formFooter">
          
        </div>
      </div>
    </div>
  </div>
  )
}
