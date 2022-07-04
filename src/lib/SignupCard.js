
import Footer from "./Footer.js";
import React, { useState } from "react";
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom';



const SignupCard=(props)=>{
    const navigator=useNavigate();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[name,setName]=useState();

    const handleChangeName=(event)=>{

        setName(event.target.value);

    }
    const handleChangeEmail=(event)=>{

        setEmail(event.target.value);

    }

    const handleChangePassword=(event)=>{

        setPassword(event.target.value);

    }


const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post("http://localhost:8080/postUser",{name:name,email:email,password:password}).then((result) => {
        console.log(result);
        navigator("/login");

    }).catch((err) => {
        console.log(err);
    });
}


return(




<div className="container-signup">
<form className="form-signup"onSubmit={handleSubmit}>     
         <div className="form-div-signup">
         <h1>Create Account</h1>
         <label>Drop your Profile Picture</label><br></br>
            <input type="file" id="upload" hidden />
            <div className="fileBorder">
<label for="upload" className="uploadFile">Choose file</label><br></br></div>
         <label for="name">Name</label>
         <input type="text" className="text-signup" name="name" required onChange={event=>handleChangeName(event)}/>
         <label for="name">Email</label>
         <input type="email" className="email-signup"  name="email" required onChange={event=>handleChangeEmail(event)}/>
         <label for="password">Password</label>
         <input type="password" className="password-signup"  name="password" required onChange={event=>handleChangePassword(event)}/>
         <input type="submit"  className="submit-signup" value="Signup" />
         <p>Already have an account?<a><b> <Link to="/Login">Login</Link></b></a></p>
     </div>
     </form>
</div>
     
 


)
}

export default SignupCard;

