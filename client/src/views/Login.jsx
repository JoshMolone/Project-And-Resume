import React from 'react';
import Axios from 'axios';
import {useState} from 'react';
import LoginForm from '../components/LoginForm';


const Login = props =>{
      const [user, setUser] = useState({
          name: "",
          password: "",
      })

      // const [token, setToken] = useState({});

      // if(!token) {
      //   return <Login 
      //           setToken={setToken} 
      //           />
      // }

    const handleLoginChange = e => {
        setUser({
          [e.target.name] : e.target.value
        })
    }
    const handleLoginSubmit = e => {
      e.preventDefault;
      Axios.post("http://localhost:8000/api/login")
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }

  return(
    <>
        <p>Login Page</p>
        <LoginForm
            handleLoginSubmit={handleLoginSubmit}
            handleLoginChange={handleLoginChange}
        />
    </>
  )
}

export default Login;