import React, { useState, useContext } from 'react';
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
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="First name" />
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="Last name" />
          <input type="email" id="login" className="fadeIn second" name="login" placeholder="login" />
          <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" />
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
