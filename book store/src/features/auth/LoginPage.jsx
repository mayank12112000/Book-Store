import React, { useEffect, useState } from 'react'
import "./loginpage.css"
import { Link, useNavigate } from 'react-router-dom'
import testCredentials from './testCredentials'
import { useDispatch } from 'react-redux'
import { login } from './authSlice'
export default function LoginPage() {
  const navigate = useNavigate()
  const [formData,setFormData] = useState({email:"",password:""})
  const dispatch = useDispatch()
  // login submit handler
  const onLoginHandler = (e) => {
    console.log("login attempted")
    setTimeout(() => {
      dispatch(login(testCredentials))
      navigate(-1); // as user login send the page to the previous page
    }, 600);
    e.preventDefault()
  }
  
const onLoginClick=()=>{
  setFormData((predata)=>{
    return {...predata,email:testCredentials.email,password:testCredentials.password}
  })
}
  const changeHandler=(e)=>{
    const {name,value} = e.target
    setFormData((preData)=>{
      return {...preData,[name]:value}
    })
  }
  return (
    <div className='loginpage'>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <br /><h2>Login</h2> <br />
          <form onSubmit={onLoginHandler}>
            <input name="email" onChange={changeHandler} value={formData.email} type="email" required id="login" className="fadeIn second"  placeholder="email" />
            <input name="password" onChange={changeHandler} value={formData.password} type="password" required id="password" className="fadeIn third"  placeholder="password" />
            <br />
            <input onClick={onLoginClick} type="submit" className="fadeIn fourth" value="Log In with test credentials" />
          </form>
          <div id="formFooter">
            <Link to={"/signup"}>
            <div className="underlineHover" >{'Create Account>'}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
