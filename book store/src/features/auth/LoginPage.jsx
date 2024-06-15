import React, { useEffect } from 'react'
import "./loginpage.css"
import { Link } from 'react-router-dom'

export default function LoginPage() {

  // login submit handler
  const onSubmitHandler = (e) => {
    e.preventDefault()
  }


  return (
    <div className='loginpage'>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <br /><h2>Login</h2> <br />
          <form onSubmit={onSubmitHandler}>
            <input type="email" required id="login" className="fadeIn second" name="login" placeholder="email" />
            <input type="password" required id="password" className="fadeIn third" name="login" placeholder="password" />
            <br />
            <input type="submit" className="fadeIn fourth" value="Log In" />
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
