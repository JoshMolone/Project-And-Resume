import React from 'react';
// import Axios from 'axios';
// import {useState} from 'react';
// import PropTypes from 'prop-types';
import Login from '../views/Login';


const LoginForm = props =>{
  const [handleSubmit, handleChange] = props;

  return(
    <div className="login-wrapper">
      <h4>Log In?</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={handleChange} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit" onChange={handleChange}>Submit</button>
        </div>
      </form>
    </div>

  )
}
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }
export default LoginForm;