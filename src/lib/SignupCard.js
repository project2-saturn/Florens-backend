
import Footer from "./Footer.js";
import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


const SignupCard=(props)=>{
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




<div class="container">
<form onSubmit={handleSubmit}>     
         <div class="form">
         <h1>Create Account</h1>
         <label for="picture">Drop your profile Picture</label>
         <input type="file" id="picUpload" name="picture"/>
         <div class="uploadFileSection">
         <label for="file" class="uploadFile" >Upload Profile Picture</label></div>
         <label for="name">Name</label>
         <input type="text"  name="name" required/>
         <label for="name">Email</label>
         <input type="email"  name="email" required/>
         <label for="password">Password</label>
         <input type="password"  name="password" required/>
         <input type="submit" value="Login" />
         <p>Already have an account?<a><b> <Link to="/Login">Login</Link></b></a></p>
     </div>
     </form>
</div>
     
 


)
}

export default SignupCard;

