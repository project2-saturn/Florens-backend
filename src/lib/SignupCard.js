import Footer from "./Footer.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import AWS from "aws-sdk";

const SignupCard = props => {
const navigator=useNavigate();
const[email,setEmail]=useState();
const[password,setPassword]=useState();
const[name,setName]=useState();

const[image,setImage]=useState();
const[isEmpty,setIsEmpty]=useState(true);
const[picture,setPicture]=useState(null);
const [error, setError] = useState();
let imageFile=" ";
let imageUrl="";
let imageURL="";
// Base64  base64String="";
const handleChangeName=(event)=>{

    setName(event.target.value);

}
const handleChangeEmail=(event)=>{

    setEmail(event.target.value);

}

const handleChangePassword=(event)=>{

    setPassword(event.target.value);

}
const handleImageChange = (event, index) => {
    console.log(event.target.files[0]);
    setPicture(event.target.files[0]);
     imageUrl = URL.createObjectURL(event.target.files[0]);
    setImage(imageUrl);
    imageFile=event.target.files[0];
    setIsEmpty(false);
  };

  const handleSubmit = async event => {
    event.preventDefault();
   await handlePicture();
   setTimeout(function() {
    console.log(image);
      const formData = new FormData();
      formData.append('name',name);
formData.append('email',email);
formData.append('password',password);
formData.append("imageURL", imageURL);
      axios
        .post("/postUser", 
     formData)
        .then(result => {
          console.log(result);
          console.log(imageURL);
    navigator("/login");
        })
        .catch(err => {
          setError(err);
        });
   },3000)    
  };

  
  

  const handlePicture =() => {
    
    const reader = new FileReader();
    const imageFile = document.getElementById("upload").files[0];
    console.log(imageFile.name);
    
    reader.onloadend = onLoadEndEvent => {
      fetch("/postImage", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          key: imageFile.name,
          data: onLoadEndEvent.target.result.split(",")[1],
          contentType: imageFile.type
        })
      })
        .then(response => {response.json();console.log(response.json)})
        .then(result => {
          console.log(result);
          imageURL += `, ${result.data.Location}`;

          return;
        })
        .catch(error => {
          console.log(error);
        });
    };

    reader.readAsDataURL(imageFile);
  };

return(
 
<div className="container-signup">


<form className="form-signup"onSubmit={handleSubmit} enctype="multipart/form-data">     
         <div className="form-div-signup">
         <h1>Create Account</h1>
         <label>Drop your Profile Picture</label><br></br>
         
         
            <input type="file" id="upload" onChange={event=>handleImageChange(event,0)} hidden />
    
           { isEmpty ? <div class="defaultSignUpImg"><img className=" defaultImage"src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image.png" width="100px" height="100px"  ></img></div>:<div class="defaultSignUpImg"> <img src={image} width="150px" height="150px" className="uploadedImage" ></img></div> }

            <div className="fileBorder">
            
<label for="upload" className="uploadFile" >Choose file</label></div>

 <label for="name" className="required">Name</label>
         <input type="text" className="text-signup" name="name" required onChange={event=>handleChangeName(event)}/>
         <label for="name" className="required">Email</label>
         <input type="email" className="email-signup"  name="email" required onChange={event=>handleChangeEmail(event)}/>
         <label for="password" className="required">Password</label>
         <input type="password" className="password-signup"  name="password" required onChange={event=>handleChangePassword(event)}/>
         {error ?
          <div className="signup-error"><p>{error}</p></div>:<></>}
         <input type="submit"  className="submit-signup" value="CREATE" />
         <p>Already have an account?<a><b> <Link to="/Login">Login</Link></b></a></p>

 </div>
 </form>
</div>

)
}


export default SignupCard;

