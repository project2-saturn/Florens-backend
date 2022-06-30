// import Header from "./Header.js"
// import Footer from "./Footer.js"
import React, { useState } from "react";
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom';


const LoginCard=(props)=>{
    const navigator=useNavigate();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

    const handleChangeEmail=(event)=>{

        setEmail(event.target.value);

    }

    const handleChangePassword=(event)=>{

        setPassword(event.target.value);

    }

    function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:8080/login",{email:email,password:password}).then((result) => {
            
            console.log(result);
            navigator("/");
        }).catch((err) => {
            console.log(err);
        });
    }

 



    return(
    


<div class="container-login">
            <form className="form-login-border" onSubmit={event=>handleSubmit(event)}>
            <div class="form-login">
            <h1>Login</h1>
           
            <label for="name">Email</label>
            <input type="email" className="email-login" name="email" onChange={event=>handleChangeEmail(event)} required />
            <div class="space"></div>
            <label for="password">Password</label>
            <input type="password"  name="password" className="password-login"  onChange={event=>handleChangePassword(event)} required />
            <p class="forgotPassword"><a>Forgot Password ?</a></p>
          
            <input type="submit" className="submit-login" value="Login" />
         
            
            <p class="newFlorens" >New on Florens?<a> <b><Link to="/Signup">Create Account</Link></b></a></p>
        </div>
        </form>
    </div>
    



    
)
}
export default LoginCard;