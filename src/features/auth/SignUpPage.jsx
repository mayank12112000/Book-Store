import React from 'react';
import { Link } from 'react-router-dom';
import "./signup.css";

const SignUpPage = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className='signuppage'>
      <div className="wrapper">
        <div id="formContent">
          <br /><h2>Sign Up</h2> <br />
          <form onSubmit={onSubmitHandler}>
            <input className='inputs' type="text" id="fname" name="fname" placeholder="First name" autoComplete='first-name' />
            <input className='inputs' type="text" id="lname" name="lname" placeholder="Last name" autoComplete='last-name'/>
            <input className='inputs' type="email" id="email" name="email" placeholder="Email" autoComplete='email'/>
            <input className='inputs' type="password" id="password" name="password" placeholder="Password" autoComplete='password'/>
            <br />
            <input className='create' type="submit" value="Create new account" />
          </form>
          <div id="formFooter">
            <Link to={"/login"}>
              <div className="underlineHover">{'Already have an account?'}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
