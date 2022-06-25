import Header from "./lib/Header.js"
import Footer from "./lib/Footer.js"
import React, { useState } from "react";
import { eventNames } from "process";
import axios from "axios";


const Signup=(props)=>{
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

    const handleChangeEmail=(event)=>{

        setEmail(event.target.value);

    }

    const handleChangePassword=(event)=>{

        setPassword(event.target.value);

    }


const handleSubmit=(event)=>{
    event.preventdefault();
    axios.post("/postUser",{email,password}).then((result) => {
        console.log(result);

    }).catch((err) => {
        console.log(err);
    });
}


return(
<>
<Header/>
<div class="container">
            <form >
            <div class="form">
            <h1>Login</h1>
           
            <label for="name">Email</label>
            <input type="email"  name="email" required onChange={event=>handleChangeEmail(event)}/>
            <div class="space"></div>
            <label for="password">Password</label>
            <input type="password"  name="password" required onChange={event=>handleChangePassword(event)}/>
            <p class="forgotPassword"><a>Forgot Password ?</a></p>
            <input type="submit" value="LOGIN" />
            <p class="newFlorens" >New on Florens?<a> <b>Create Account</b></a></p>
        </div>
    
    </form>
    </div>



<Footer/>
</>
)
}

export default Signup;

