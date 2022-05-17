import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  })

  const [errMessage, setErrMessage] = useState("")

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  const loginHandler = e => {
    e.preventDefault()
    axios
    .post('http://localhost:8000/api/users/login', user, {
      
    })
  }

}

export default Login;