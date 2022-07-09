import Footer from "./Footer.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AWS from "aws-sdk";
// import FileReader from "filereader";

const SignupCard = props => {
  //   useEffect(async () => {
  //     const s3 = new AWS.S3({
  //       accessKeyId: "",
  //       secretAccessKey: ""
  //     });
  //     const imageURL = "../images/florens-logo_green.png";

  //     fetch(imageURL)
  //       .then(result => result.blob())
  //       .then(async (blob) => {
  //        const uploadedImage = await s3.upload({
  //           Bucket: "florens",
  //           Key: "florens-logo_green.png",
  //           Body: blob
  //         }).promise();
  //         console.log(uploadedImage);
  //       })
  //       .catch(error => console.log(error))
  //       .catch(error => console.log(error));
  //     // const res = await fetch(imageURL);
  //     // const blob = await res.buffer();

  //     // const uploadedImage =
  //     // await s3
  //     //   .upload({
  //     //     Bucket: "florens",
  //     //     Key: req.files[0].originalFilename,
  //     //     Body: blob
  //     //   }).promise();

  //     // console.log(uploadedImage.Location);
  //   }, []);
  const navigator = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleChangeImage = event => {
    console.log(event.target.files[0]);
    // console.log(event.target.result);

    setImage(URL.createObjectURL(event.target.files[0]) )  ;
    // setImage(event.target.value);
  };
  // useEffect(()=>{
  //     axios.get("http://localhost:8080/getimage").then((result) => {
  //         console.log(result);
  //         setImage(result.data.image)

  //     }).catch((err) => {
  //         console.log(err);
  //     });
  // }
  // )

  const handleSubmit = event => {
    event.preventDefault();

    // const image = document.getElementById('picUpload');
    // console.log(image.files[0]);

    // console.log(event.target.form[0].files[0]);
    // let fil = { ...event.target.form[0].files[0] };
    // let readedFile;
    // let read = new FileReader();
    // read.onload = function() {
    //   readedFile = read.result;
    // };

    // read.readAsBinaryString(event.target.form[0].files[0]);
    // let fi =
    // console.log(readedFile);

    axios
      .post("/postImage", { file: image })
      .then(result => {
        axios
          .post("/postUser", {
            name: name,
            email: email,
            password: password,
            imageURL: result.data
          })
          .then(result => {
            console.log(result);
            navigator("/login");
          })
          .catch(err => {
            console.log(err);
          });
      });
    // let read = new FileReader();

    // read.readAsBinaryString(file);

    let imageURL = "";
  };

  return (
    <div className="container-signup">
      <div>{image != null ? image : <></>}</div>
      <form
        className="form-signup"
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
      >
        <div className="form-div-signup">
          <h1>Create Account</h1>
          <label>Drop your profile Picture</label>
          <div className="uploadFileSection">
            <label for="picUpload" className="uploadFile">
              Upload Profile Picture
              <input
                type="file"
                className="file-signup"
                id="picUpload"
                name="picUpload"
                onChange={event => handleChangeImage(event)}
              />
            </label>
          </div>
          {/* {image.map((imageData)=>{
            const base64String=btoa(String.fromCharCode(...new Uint8Array((imageData.img.data))));
            return <img src={`data:image/png;base64,${base64String}`}></img>
         })} */}

          <label for="name">Name</label>
          <input
            type="text"
            className="text-signup"
            name="name"
            required
            onChange={event => handleChangeName(event)}
          />
          <label for="name">Email</label>
          <input
            type="email"
            className="email-signup"
            name="email"
            required
            onChange={event => handleChangeEmail(event)}
          />
          <label for="password">Password</label>
          <input
            type="password"
            className="password-signup"
            name="password"
            required
            onChange={event => handleChangePassword(event)}
          />
          <input
            type="submit"
            className="submit-signup"
            value="Signup"
            onClick={event => handleSubmit(event)}
          />
          <p>
            Already have an account?
            <a>
              <b>
                {" "}
                <Link to="/Login">Login</Link>
              </b>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupCard;
