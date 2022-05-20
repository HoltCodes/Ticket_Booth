import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [err, setErr] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    setSuccessMsg("");
    const postData = ( email, password );
    axios
    .post('http://localhost:8000/api/login', postData, {
      withCredentials: true,
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  };
  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/logout");
      setSuccessMsg(response.msg);
      navigate("/ticketList");
    } catch (error) {
      console.log(err.response);
    }
    // axios
    // .get("http://localhost:8000/logout")
    // .then((response) => console.log(response))
    // .catch((error) => console.log(error));
  };


  return (
    <div className="container"> 
       <div className="FormWrapper">
          <div className="FormContent">
              <form className="Form" onSubmit={ handleSubmit }>
                      <div className="FormH3">Login to your Account </div>

                       <div className="FormLabel">
                         Email:
                         <input
                         type="text"
                         onChange={(e) => setEmail(e.target.value)}
                         />
                       </div>

                       <div className="FormLabel">
                         Password:
                         <input
                         type="text"
                         onChange={(e) => setPassWord(e.target.value)}
                         />
                       </div>
                             
                        <button className="FormButton" type="submit">Submit</button>
                        <button onClick={async() => await handleLogout}>Logout</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Login;