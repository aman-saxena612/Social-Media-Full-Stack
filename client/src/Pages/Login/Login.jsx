import React from 'react';
import "./login.scss";
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    
    e.preventDefault();
    try{

    await login(inputs);
    navigate("/");

    }catch(err){
      setErr(err.response.data);
    }
  };

  return (
    <div className='login'>
        <div className='card'>
            <div className='left'>
                <h1> Hello World </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <span> Don't have an account? </span>
                <Link to = "/register">
                <button> Register </button>
                </Link>
            </div>
            <div className='right'>
                <h1> Login </h1>
                <form>
                  <input type='text' placeholder='Username' name='username' onChange={handleChange} /> 
                  <input type='password' placeholder='Password' name='password' onChange={handleChange} />

                  {err && err}
                  <button onClick={handleLogin}> Login </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;