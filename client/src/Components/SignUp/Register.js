import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = (props) => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    const handleUserChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const register = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/register', user, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                navigate('/signin')
            })
            .catch(err => {
                console.log(err.response)
                setErrors(err.response.data.errors)
                setUser({
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                })
            })
    }

    return (
        <div className="container"> 
           <div className="FormWrapper">
              <div className="FormContent">
                  <div className="Form" onSubmit={register}>
                          <div className="FormH1">Create an Account </div>
                            <label className="FormLabel"> Username </label>
                            {errors.username ?
                                <input className="FormInput" type='text' name='username' value={user.username} onChange={handleUserChange} style={{ outline: "2px solid red" }} placeholder={errors.username.message} />
                                :
                                <input className="FormInput" type='text' name='username' value={user.username} onChange={handleUserChange} />
                            }

                            <label className="FormLabel"> Email </label>
                            {errors.email ?
                                <input className="FormInput" type='text' name='email' value={user.email} onChange={handleUserChange} style={{ outline: "2px solid red" }} placeholder={errors.email.message} />
                                :
                                <input className="FormInput" type='text' name='email' value={user.email} onChange={handleUserChange} />
                            }

                            <label className="FormLabel"> Password </label>
                            {errors.password ?
                                <input className="FormInput" type='password' name='password' value={user.password} onChange={handleUserChange} style={{ outline: "2px solid red" }} placeholder={errors.password.message} />
                                :
                                <input className="FormInput" type='password' name='password' value={user.password} onChange={handleUserChange} />}

                            <label className="FormLabel"> Confirm Password </label>
                            {errors.confirmPassword ?
                                <input className="FormInput" type='password' name='confirmPassword' value={user.confirmPassword} onChange={handleUserChange} style={{ outline: "2px solid red" }} placeholder={errors.confirmPassword.message} />
                                :
                                <input className="FormInput" type='password' name='confirmPassword' value={user.confirmPassword} onChange={handleUserChange} />}

                            <button className="FormButton" type='submit'>Create</button>
                            <link className="SignIn" to='/signin'>Sign In</link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register