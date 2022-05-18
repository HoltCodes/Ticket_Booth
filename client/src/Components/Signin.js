import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errMessage, setErrMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  const loginHandler = e => {
    e.preventDefault()
    axios
    .post("http://localhost:8000/api/users/login", user, { withCredentials: true })
    .then(res => {
      console.log(res.data)
      navigate("/tickets")
    })
    .catch(err => {
      console.log(err.response.data)
      setErrMessage(err.response.data.message)
      setUser({ 
        username: "",
        email: "",
        password: "",
      })
    })
  }

  return (
    <div className="container"> 
       <div className="FormWrapper">
          <div className="FormContent">
              <form className="Form" onSubmit={ loginHandler }>
                      <div className="FormH3">Sign in to your Account </div>

                        <label className="FormLabel"> Email </label>
                            <input 
                            type="text" 
                            id="email"
                            name="email"
                            // value={user.email} 
                            className="FormInput" 
                            onChange={ handleChange }/>

                        <label className="FormLabel"> Password </label>
                            <input 
                            type="password"
                            id="password" 
                            name="password" 
                            // value={user.password} 
                            className="FormInput"
                            onChange={ handleChange }/>
                             
                        <button className="FormButton" type="submit">Sign In</button>
                        <Link className="Register" to="/">Sign Up</Link>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Login;