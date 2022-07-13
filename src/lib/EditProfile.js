import React from "react";
import {useEffect,useState} from 'react';
import axios from 'axios';
import {Buffer} from 'buffer';
import "../styles/editProfile.css";
// import Footer from "../src/lib/Footer";
// import NavigationBar from "../src/lib/NavigationBar";
const EditProfile=(props)=>{
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[image,setImage]=useState()
    const[name,setName]=useState()
    const[data1,setData]=useState()
    useEffect(function loadUsername(){

        axios.get("/getUsername").then((result) => {
          console.log(result);
          if(result.data=="")
          {
            setName("Login")
            setIsLogged(false);
          }
          else{
          setName(result.data)
          
          }
        }).catch((err) => {
          
          console.log(err);
        });
        },[])
   


  function loadImage(){


    axios.post("/getimage",{name:name}).then((result) => {
            
     console.log(result.data.contentType);
     console.log(result.data.data);
     setData(result);
    //  console.log(result.data.contentType);

       
        // const blob = new Blob([Int8Array.from(result.data.data)], {type: result.data.contentType });

        // console.log(blob);
        // console.log(blob.toString());
        // setImage( window.URL.createObjectURL(blob));
        setImage(`data:${result.data.contentType};base64, Buffer.from ${result.data.data}.toString('base64')}`);

    }).catch((err) => {
        
        console.log(err);
    });



   }
   
   
   loadImage()
 
   
    function handleSubmit(event){
        event.preventDefault();
        
        axios.patch("/edit",{email:email,password:password}).then((result) => {
            
            console.log(result);
           
        }).catch((err) => {
            console.log(err);
        });
    }

    return ( 
        
     <div class="EditProfileform-container">
       <img   className="EditProfileImg" src={image} /><br></br>
           <form className="EditProfileForm" onSubmit={handleSubmit}> 
           <h1 className="EditProfileTitle">Edit Profile</h1>
         
           <label className="EditProfileEmailLabel" for="email">Email</label>
           <input className="EditProfileEmail" type="email"  name="email"  onChange={(event)=>setEmail(event.target.value)} required/>
           <label className="EditProfilePasswordLabel" for="password">Password</label>
           <input className="EditProfilePassword"  type="password"  name="password" onChange={(event)=>setPassword(event.target.value)} required/> 
           <input type="submit" className="EditProfileSubmit" value="SAVE" />
    </form>
    {image}
    </div>
        );    
}
export default EditProfile;
 