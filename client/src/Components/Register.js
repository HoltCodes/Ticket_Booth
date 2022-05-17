import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Register = (props) => {
    const [ username, setUserName ] = useState("");
    const [ email, setEmail ] = useState ("");
    const [ password, setPassWord ] = useState ("");
    const [ confirmPassword, setConfirmPassword ] = useState("");  
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const [ user, setUser ] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const register = (e) => {
        e.preventDefault();
        console.log({
            username,
            email,
            password,
            confirmPassword
        });
        axios
        .post('http://localhost:8000/api/users/register', user, { 
            username,
            email,
            password,
            confirmPassword
         })
            .then(res => {
                console.log(res.data);
                navigate('/signin');
            })
            .catch(err => {
                console.log("error", err.response)
                setErrors(err.response.data.errors)
                setUser({
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
            });
    };

    return (
        <div className="container"> 
           <div className="FormWrapper">
              <div className="FormContent">
                  <form className="Form" onSubmit={ register }>
                          <div className="FormH3">Create an Account </div>

                            <label className="FormLabel"> Username </label>
                                <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                // value={user.username} 
                                className="FormInput" 
                                onChange={(e) => setUserName(e.target.value)}/>

                            <label className="FormLabel"> Email </label>
                                <input 
                                type="text" 
                                id="email"
                                name="email"
                                // value={user.email} 
                                className="FormInput" 
                                onChange={ (e) => setEmail(e.target.value)}/>

                            <label className="FormLabel"> Password </label>
                                <input 
                                type="password"
                                id="password" 
                                name="password" 
                                // value={user.password} 
                                className="FormInput"
                                onChange={ (e) => setPassWord(e.target.value)}/>

                            <label className="FormLabel"> Confirm Password </label>
                                <input 
                                type="password" 
                                id="confirmPassword" 
                                name="confirmPassword"
                                // value={user.confirmPassword} 
                                className="FormInput" 
                                onChange={ (e) => setConfirmPassword(e.target.value)}/>
                                 
                            <button className="FormButton" type="submit">Create</button>
                            <Link className="SignIn" to="/signin">Sign In</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Register;