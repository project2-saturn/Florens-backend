import axios from "axios";

import React , {useState, useEffect}from "react";

import {Link} from 'react-router-dom';
import cookies from 'react-cookies' 
import { useNavigate } from "react-router-dom";


const Modal=props=>{
    const navigator = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
  
    const handleChangeEmail = event => {
      setEmail(event.target.value);
    };
  
    const handleChangePassword = event => {
      setPassword(event.target.value);
    };
  
    function handleSubmit(event) {
      event.preventDefault();
      axios
        .post("/login", { email: email, password: password })
        .then(result => {
          console.log(result);
          navigator("/");
        })
        .catch(err => {
          setError(err.response.data.message);
        });
    }

    const handleClose=()=>{
        props.setShow(!(props.show))
      }

    return (
       <>
       {console.log(props.show)}
    <div class="bg-modal" style={{display: props.show ? "flex" : "none" }} >
         <div class="modalContent" >
            {console.log("entered")}
          <form class="modalFourm"    onSubmit={event => handleSubmit(event)}>
            <button id="formCloseBtn" class="formCloseBtn" type="button" onClick={handleClose} >+</button>
            
            {console.log(props.show)}<h1 class="formheading">Have an account at Florens?</h1>
            <p class="formParagraph">Sign in to create your library collection!</p>
           
            <label class="formLabelEmail" for="email">Email</label>
            <input class="formInputEmail" type="email"  name="email" required onChange={event => handleChangeEmail(event)}/>
           
            <label class="formLabelPassword" for="password">Password</label>
            <input class="formInputPassword" type="password"  name="password" required  onChange={event => handleChangePassword(event)}/>
            <p class="forgotPassword"><a>Forgot Password ?</a></p>
            <input class="formSubmit" type="submit" value="LOGIN" />
            
            <p class="newFlorens" >New on Florens?<a> <Link to="/signup">
              <b>Create Account</b>
            </Link></a></p>
        
   
          </form>
         </div>
    </div>
</>













    )

}
export default Modal;