// import Header from "./Header.js"
// import Footer from "./Footer.js"
import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


const LoginCard=(props)=>{
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

    const handleChangeEmail=(event)=>{

        setEmail(event.target.value);

    }

    const handleChangePassword=(event)=>{

        setPassword(event.target.value);

    }

    function handleSubmit(){



        axios.post("/login",{email:email,password:password}).then((result) => {
            console.log(result);
            
        }).catch((err) => {
            console.log(err);
        });
    }




    return(
    


<div class="container">
            <form onSubmit={event=>handleSubmit(event)}>
            <div class="form">
            <h1>Login</h1>
           
            <label for="name">Email</label>
            <input type="email"  name="email" onChange={handleChangeEmail} required />
            <div class="space"></div>
            <label for="password">Password</label>
            <input type="password"  name="password" onChange={handleChangePassword} required />
            <p class="forgotPassword"><a>Forgot Password ?</a></p>
            <Link to="/Signup">
            <input type="submit" value="Signup" />
            </Link>
            
            <p class="newFlorens" >New on Florens?<a> <b><Link to="/Signup">Create Account</Link></b></a></p>
        </div>
        </form>
    </div>
    



    
)
}
export default LoginCard;