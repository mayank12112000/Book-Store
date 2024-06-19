import { nanoid } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import testCredentials from '../features/auth/testCredentials'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress } from '../features/auth/authSlice'

export default function AddOrEditAddress() {
    const [formData,setFormData] = useState({id:nanoid(),type:"",houseNo:"",city:"",State:"",Country:"",pinCode:"",mobile:""})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.user)
    const dummyData = testCredentials.address;
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
    
        return (
            <div className='signuppage'>
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <br /><h2>Add Address</h2> 
        <form onSubmit={submitHandler}>
          <input required onChange={changeHandler} type="text" className="fadeIn second" name="type" placeholder="Enter Name" />
          <input required onChange={changeHandler} type="text" className="fadeIn second" name="houseNo" placeholder="House no. , Road" />
          <input required onChange={changeHandler} type="text" className="fadeIn second" name="city" placeholder="city" />
          <input required onChange={changeHandler} type="text" className="fadeIn third" name="State" placeholder="State" />
          <input required onChange={changeHandler} type="text" className="fadeIn third" name="Country" placeholder="Country" />
          <input required onChange={changeHandler} type="text" className="fadeIn third" name="pinCode" placeholder="Pin code" />
          <input required onChange={changeHandler} type="text" className="fadeIn third" name="mobile" placeholder="Enter Mobile number" />
          <br />
          <div className="button-group container d-flex flex-row justify-content-around" >
          <button  type="submit" className="btn btn-outline-primary" value="Create">Add</button>
          <button type="button mx-3" className="btn btn-outline-danger" value="Cancel">Cancel</button>
          <button type="button" className="btn btn btn-outline-warning" value="Fill with dummy data">Fill with dummy <data value=""></data></button>
          </div>
        </form>
        <div id="formFooter">
          
        </div>
      </div>
    </div>
  </div>
  )
}
