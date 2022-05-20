import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState ("");
    const [ password, setPassWord ] = useState ("");
    const [ confirmPassword, setConfirmPassword ] = useState("");  
    const [err, setErr] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
    const postData = {
            email,
            firstName,
            lastName,
            password,
            confirmPassword,
        };
        try {
            await axios.post("http://localhost:8000/api/register", postData);
            navigate("/login");
        } catch (err) {
          setErr(err.response.data.error);
        }
    };
    return (
        <div className="container"> 
           <div className="FormWrapper">
              <div className="FormContent">
                  <form className="Form" onSubmit={ handleSubmit }>
                          <div className="FormH3"> Register </div>

                            <div className="FormLabel">
                                First Name: {" "}
                                <input 
                                type={"text"}
                                onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className="FormLabel">
                                Last Name: {" "}
                                <input 
                                type={"text"}
                                onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div className="FormLabel">
                                Email: {" "}
                                <input 
                                type={"text"}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="FormLabel">
                                Password: {" "}
                                <input 
                                type={"text"}
                                onChange={(e) => setPassWord(e.target.value)}
                                />
                            </div>

                            <div className="FormLabel">
                                Confirm Password: {" "}
                                <input 
                                type={"text"}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                                 
                            <button className="FormButton" type="submit">Create</button>
                            <button className="SignIn" to="/login">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Register;

