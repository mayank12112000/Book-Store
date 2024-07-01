import React from 'react';
import { Link } from 'react-router-dom';
import "./signup.css"
const SignUpPage = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className='signuppage'>
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <br /><h2>Sign Up</h2> <br />
        <form onSubmit={onSubmitHandler}>
          <input type="text" id="fname" className="fadeIn second" name="fname" placeholder="First name" autoComplete='first-name' />
          <input type="text" id="lname" className="fadeIn second" name="lname" placeholder="Last name" autoComplete='last-name'/>
          <input type="email" id="email" className="fadeIn second" name="email" placeholder="email" autoComplete='email'/>
          <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" autoComplete='password'/>
          <br />
          <input type="submit" className="fadeIn fourth" value="Create new account" />
        </form>
        <div id="formFooter">
          <Link to={"/login"}>
          <div className="underlineHover" >{'Already have an account>'}</div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignUpPage;
