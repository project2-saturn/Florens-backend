import React from "react";
import {useEffect,useState} from 'react';
const EditProfile=(props)=>{
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:8080/editProfile",{email:email,password:password}).then((result) => {
            
            console.log(result);
            navigator("/editProfile");
        }).catch((err) => {
            console.log(err);
        });
    }

    return ( 
     <div class="form-container">
           <form onSubmit={handleSubmit}> 
           <h1>Edit Profile</h1>
           <img   src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" /><br></br>
           <label for="email">Email</label>
           <input type="email"  name="email"  onChange={(event)=>setEmail(event.target.value)} required/>
           <label for="password">Password</label>
           <input type="password"  name="password" onChange={(event)=>setPassword(event.target.value)} required/> 
           <input type="submit" value="SAVE" />
    </form>
    </div>
        );    
}
export default EditProfile;
 