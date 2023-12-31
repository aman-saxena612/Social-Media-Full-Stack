import React, { useState } from 'react';
import "./register.scss";
import { Link } from 'react-router-dom';
import axios from "axios";

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  })

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async (e) => {

    e.preventDefault();
    try {
      
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  }

  // console.log(inputs);

  return (
    <div className='register'>
        <div className='card'>
            <div className='left'>
                <h1> Hello World </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <span> Do you have an account? </span>
                <Link to = "/login">
                <button> Login </button>
                </Link>
            </div>
            <div className='right'>
                <h1> Sign Up </h1>
                <form>
                  <input type='text' placeholder='Username' name='username' onChange={handleChange} /> 
                  <input type='password' placeholder='Password' name='password' onChange={handleChange} />
                  <input type='email' placeholder='Email' name='email' onChange={handleChange} />
                  <input type='text' placeholder='Name' name='name' onChange={handleChange} />
                  {err && err}
                  <button onClick={handleClick}> Register </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;