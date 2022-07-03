
import Footer from "./Footer.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom';



const SignupCard=(props)=>{
    const navigator=useNavigate();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[name,setName]=useState();
    const[image,setImage]=useState();
    const[picture,setPicture]=useState(null);
   
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
   

    const handleImageChange=(event)=>{
console.log(event.target.files[0]);
setImage(URL.createObjectURL(event.target.files[0])  )  ;
       

    }




// useEffect(()=>{
// }
//     },[image])


const handleSubmit=(event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append('name',name);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('image',picture);
    
  console.log(picture);
    axios.post("http://localhost:8080/postUser",formData).then((result) => {
        console.log(result);
        setImage(result.data.image);
        navigator("/login");

    }).catch((err) => {
        console.log(err);
    });
}


return(




<div className="container-signup">
{/* {image?.map((imageData)=>{
       const base64String=btoa(String.fromCharCode(...new Uint8Array((imageData.data))));
       console.log(base64String);
    })
    

} */}

<form className="form-signup"onSubmit={handleSubmit} enctype="multipart/form-data">     
         <div className="form-div-signup">
         <h1>Create Account</h1>
         <label for="picture">Drop your profile Picture</label>
         <div className="uploadFileSection">
         <label for="file" className="uploadFile" >Upload Profile Picture</label>
         <input type="file" className="file-signup" id="picUpload" name="picture" onChange={event=>handleImageChange(event)}/>
         </div>
         <img src={image}></img>
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

