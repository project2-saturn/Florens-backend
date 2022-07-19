import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddDiscoverForm = props => {
  const [username, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();

  useEffect(function loadUsername() {
    axios
      .get("/getUsername")
      .then(result => {
        console.log(result);

        setUserName(result.data);
        if (result.data == "") {
          setUserName("KPU");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  useEffect(function loadUserEmail() {
    axios
      .get("/getUserEmail")
      .then(result => {
        console.log(result);

        setUserEmail(result.data);
        if (result.data == "") {
          setUserEmail("KPU");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  /////////////////////////////Location/////////////////////////////////////////////////
  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }
  //////////////////////////Plant Type/////////////////////////////////////////////////
  const [planttags, setPlanttags] = useState([]);

  function handleKeyPlant(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setPlanttags([...planttags, value]);
    e.target.value = "";
  }

  function removePlanttag(index1) {
    setPlanttags(planttags.filter((el, i) => i !== index1));
  }
  ////////////////////////////////////color////////////////////////////////////////////////
  const [colortags, setColortags] = useState([]);

  function handleKeyColor(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setColortags([...colortags, value]);
    e.target.value = "";
  }

  function removeColortag(index2) {
    setColortags(colortags.filter((el, i) => i !== index2));
  }

  ////////////////////////////////////Season/////////////////////////////////////////////////
  const [seasontags, setSeasontags] = useState([]);

  function handleKeySeason(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setSeasontags([...seasontags, value]);
    e.target.value = "";
  }

  function removeSeasontag(index3) {
    setSeasontags(seasontags.filter((el, i) => i !== index3));
  }

  ////////////////////////////////////Form///////////////////////////////////////////////////

  const [formtags, setFormtags] = useState([]);

  function handleKeyForm(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setFormtags([...formtags, value]);
    e.target.value = "";
  }

  function removeFormtag(index4) {
    setFormtags(formtags.filter((el, i) => i !== index4));
  }
  ////////////////////////////////////texture/////////////////////////////////////////////////
  const [texturetags, setTexturetags] = useState([]);

  function handleKeyTexture(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTexturetags([...texturetags, value]);
    e.target.value = "";
  }

  function removeTexturetag(index5) {
    setTexturetags(texturetags.filter((el, i) => i !== index5));
  }
  ////////////////////////////////////////images/////////////////////////////////////////////
  const navigator = useNavigate();
  const [plantname, setPlantname] = useState();
  const [scientificname, setScientificname] = useState();
  const [description, setDescription] = useState();

  const [image, setImage] = useState([]);
  const [isEmpty, setIsEmpty] = useState([true, true, true, true, true]);
  const [picture, setPicture] = useState([]);
  // const [imageURL, setImageURL] = useState("");
  let imageURL = "";
  const [error, setError] = useState();

  const handleChangePlantName = event => {
    setPlantname(event.target.value);
  };
  const handleChangeScientificName = event => {
    setScientificname(event.target.value);
  };

  const handleChangeDescription = event => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event, index) => {
    console.log(event.target.files[0]);

    let tempPictureArr = [...picture];
    tempPictureArr[index] = event.target.files[0];
    setPicture([...tempPictureArr]);

    let tempImageArr = [...image];
    tempImageArr[index] = URL.createObjectURL(event.target.files[0]);
    setImage([...tempImageArr]);

    let tempEmptyArr = [...isEmpty];
    tempEmptyArr[index] = false;

    setIsEmpty([...tempEmptyArr]);
  };

  const imageUploader = async () => {
    // console.log("image Uploader called");
    for (const [iterator, isAbsent] of isEmpty.entries()) {
      // console.log(`atIndex: ${iterator}`);
      // console.log(`isAbsent : ${isAbsent}`);
      // console.log("for loop executed one time");
      if (!isAbsent) {
        const l = await handlePicture(iterator);
      }
    }
    return;
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const r = await imageUploader();
    setTimeout(function() {
      const formData = new FormData();
      // console.log("after imageUploader");
      // console.log(imageURL);
      // console.log(`plantname: ${plantname}`);
      // console.log(`plantname: ${scientificname}`);
      // console.log(`plantname: ${tags}`);
      // console.log(`plantname: ${planttags}`);
      // console.log(`plantname: ${colortags}`);
      // console.log(`plantname: ${seasontags}`);
      // console.log(`plantname: ${formtags}`);
      // console.log(`plantname: ${texturetags}`);
      formData.append("name", "weferf");
      formData.append("scientificName", scientificname);
      formData.append("description", description);

      formData.append("photosURL", imageURL);
      formData.append("season", seasontags);
      formData.append("location", tags);

      formData.append("type", planttags);
      formData.append("color", colortags);

      formData.append("texture", texturetags);
      formData.append("form", formtags);

      formData.append("owner", username);
      // console.log(imageURL);
      // console.log(formData);

      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }

      axios
        .post("/postPlant", {
          photosURL : imageURL.substring(1),
          name: plantname,
          scientificName : scientificname,
          season: seasontags.toString(),
          description: description,
          location: tags.toString(),
          type: planttags.toString(),
          color: colortags.toString(),
          texture: texturetags.toString(),
          form: formtags.toString(),
          owner: username
        })
        .then(result => {
          console.log(result);
          axios.patch("addPlantToDiscovery", {plantObjectID: result.data.data.id, useremail:userEmail});
          // setPicture(result.data.image);
          // console.log(image);
          navigator("/userprofile");
        })
        .catch(err => {
          setError(err.response.data.message);
        });
    }, 3000);
  };

  const handlePicture = async index => {
    // event.persist();
    // event.preventDefault();
    // console.log("handlePicture Called.");
    const reader = new FileReader();
    // console.log(`index: ${index}`);
    const imageFile = document.getElementById(`upload${index}`).files[0];
    console.log(imageFile.name);
    2;
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
        .then(response => response.json())
        .then(result => {
          console.log(result);
          // res.json()

          // let tempImageURL = imageURL;
          // tempImageURL += `, ${result.data.Location}`;
          // console.log(`temp URL before: ${tempImageURL}`);
          // tempImageURL.push(result.data.Location);
          // console.log(`temp URL after: ${tempImageURL}`);
          // setImageURL(`${imageURL}, ${result.data.Location}`);
          // console.log("existing hanlepicture");
          // console.log(imageURL);

          imageURL += `, ${result.data.Location}`;

          return;
        })
        .catch(error => {
          // setUploading(false);
          // pong.danger(error.message || error.reason || error);
          // uploadEvent.target.value = "";
          console.log(error);
        });
    };

    reader.readAsDataURL(imageFile);
  };

  ///////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
    <div>
    <h2 className="disHeading">Add a Discovery</h2>
    <div className="disContentDiv">
    <p className="discContent">We encourage you to add any plant discovery you had, however, keep in mind that we require accurate information in order to keep our community a reliable place.</p>
     </div> {/* <div>
        <p>PlantName: {plantname}</p>

        <p>ScientificName: {scientificname}</p>
        <p>Location: {tags}</p>
        <p>ImagesURL: {imageURL}</p>
        <p>Description: {description}</p>
        <p>Season: {seasontags}</p>
        <p>Type: {planttags}</p>
        <p>Color: {colortags}</p>
        <p>Texture: {texturetags}</p>
        <p>Form: {formtags}</p>
        <p>Owner: {username}</p>
        {/* <p>PlantName: {plantname}</p> */}
      {/* </div>  */}
      <form
        className="form-signup"
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
      >
        <label for="name">Name</label>
        <input
          type="text"
          className="plantNameInput"
          name="plantName"
          required
          onChange={event => handleChangePlantName(event)}
        />
        <label for="sname">Scientific Name</label>
        <input
          type="text"
          className="scientificNameInput"
          name="scientificName"
          required
          onChange={event => handleChangeScientificName(event)}
        />

        {/*//////////////////////////////////// Location container/////////////////////////////////////// */}
        <label for="location">Location</label>
        <div className="tags-input-container">
          {tags.map((tag, index) => (
            <div className="tag-item" key={index}>
              <span className="text">{tag}</span>
              <span className="close" onClick={() => removeTag(index)}>
                &times;{" "}
              </span>
            </div>
          ))}

          <input
            onKeyDown={handleKeyDown}
            type="text"
            className="tags-input"
            placeholder="Tags"
          />
        </div>
        {/*////////////////////////////////////////// Plant Type/////////////////////////////////////// */}

        <label for="planttype">Plant Type</label>
        <div className="plantType">
          {planttags.map((planttag, index1) => (
            <div className="planttype-item" key={index1}>
              <span className="text">{planttag}</span>
              <span className="close" onClick={() => removePlanttag(index1)}>
                &times;{" "}
              </span>
            </div>
          ))}

          <input
            onKeyDown={handleKeyPlant}
            type="text"
            className="planttype-input"
            placeholder="Plant Type"
          />
        </div>
        {/* ////////////////////////////////////Color/////////////////////////////////////////////////// */}
        <label for="colortype">Color</label>
        <div className="colorType">
          {colortags.map((colortag, index2) => (
            <div className="colortype-item" key={index2}>
              <span className="text">{colortag}</span>
              <span className="close" onClick={() => removeColortag(index2)}>
                &times;{" "}
              </span>
            </div>
          ))}

          <input
            onKeyDown={handleKeyColor}
            type="text"
            className="colortype-input"
            placeholder="Color"
          />
        </div>
        {/* ///////////////////////////////////Season/////////////////////////////////////////////////// */}
        <label for="seasontype">Season</label>
        <div className="seasonType">
          {seasontags.map((seasontag, index3) => (
            <div className="seasontype-item" key={index3}>
              <span className="text">{seasontag}</span>
              <span className="close" onClick={() => removeSeasontag(index3)}>
                &times;{" "}
              </span>
            </div>
          ))}

          <input
            onKeyDown={handleKeySeason}
            type="text"
            className="seasontype-input"
            placeholder="Season"
          />
        </div>
        {/* //////////////////////////////////form////////////////////////////////////////////////////// */}
        <label for="formtype">Form</label>
        <div className="formType">
          {formtags.map((formtag, index4) => (
            <div className="formtype-item" key={index4}>
              <span className="text">{formtag}</span>
              <span className="close" onClick={() => removeFormtag(index4)}>
                &times;{" "}
              </span>
            </div>
          ))}

          <input
            onKeyDown={handleKeyForm}
            type="text"
            className="formtype-input"
            placeholder="Form Type"
          />
        </div>
        {/* ///////////////////////////////////texture////////////////////////////////////////////////// */}
        <label for="texturetype">Texture</label>
        <div className="textureType">
          {texturetags.map((texturetag, index5) => (
            <div className="texturetype-item" key={index5}>
              <span className="text">{texturetag}</span>
              <span className="close" onClick={() => removeTexturetag(index5)}>
                &times;{" "}
              </span>
            </div>
          ))}

          <input
            onKeyDown={handleKeyTexture}
            type="text"
            className="texturetype-input"
            placeholder="Texture"
          />
        </div>
        {/* //////////////////////////////////Description/////////////////////////////////////////////// */}

        <label for="description">Description</label>
        <div className="desDiv">
        <textarea
          name="descriptionPlant"
          rows="6"
          cols="20"
          className="description"
          onChange={event => handleChangeDescription(event)}
          placeholder="Add plant Description...."
          required
        ></textarea></div>
        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* image section one */}

        <label>Drop your Plant Picture 1</label>
        <br></br>
        <img src=""></img>
        <input
          type="file"
          id="upload0"
          onChange={event => handleImageChange(event, 0)}
          hidden
          required
        />
        {isEmpty[0] ? (
          <div className="centerImg">
          <img
            className=" defaultImage"
            src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
            width="150px"
            height="150px"
            margin-left="36%"
          ></img></div>
        ) : (
          <div className="centerImg"><img
            src={image[0]}
            width="150px"
            height="150px"
            className="uploadedImage"
          ></img></div>
        )}

        <div className="fileBorder">
          <label for="upload0" className="uploadFile">
            Choose file
          </label>
          <br></br>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* image section two */}

        <label>Drop your Plant Picture 2</label>
        <br></br>
        <img src=""></img>
        <input
          type="file"
          id="upload1"
          onChange={event => handleImageChange(event, 1)}
          hidden
        />
        {isEmpty[1] ? (
          <div className="centerImg"><img
            className=" defaultImage"
            src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
            width="150px"
            height="150px"
            margin-left="36%"
          ></img></div>
        ) : (
          <div className="centerImg"><img
            src={image[1]}
            width="150px"
            height="150px"
            className="uploadedImage"
          ></img></div>
        )}

        <div className="fileBorder">
          <label for="upload1" className="uploadFile">
            Choose file
          </label>
          <br></br>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* image section three */}

        <label>Drop your Plant Picture 3</label>
        <br></br>
        <img src=""></img>
        <input
          type="file"
          id="upload2"
          onChange={event => handleImageChange(event, 2)}
          hidden
        />
        {isEmpty[2] ? (
          <div className="centerImg"><img
            className=" defaultImage"
            src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
            width="150px"
            height="150px"
            margin-left="36%"
          ></img></div>
        ) : (
          <div className="centerImg"><img
            src={image[2]}
            width="150px"
            height="150px"
            className="uploadedImage"
          ></img></div>
        )}

        <div className="fileBorder">
          <label for="upload2" className="uploadFile">
            Choose file
          </label>
          <br></br>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* image section four */}

        <label>Drop your Plant Picture 4</label>
        <br></br>
        <img src=""></img>
        <input
          type="file"
          id="upload3"
          onChange={event => handleImageChange(event, 3)}
          hidden
        />
        {isEmpty[3] ? (
          <div className="centerImg"><img
            className=" defaultImage"
            src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
            width="150px"
            height="150px"
            margin-left="36%"
          ></img></div>
        ) : (
          <div className="centerImg"><img
            src={image[3]}
            width="150px"
            height="150px"
            className="uploadedImage"
          ></img></div>
        )}

        <div className="fileBorder">
          <label for="upload3" className="uploadFile">
            Choose file
          </label>
          <br></br>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* image section five */}
          
        <label>Drop your Plant Picture 5</label>
        <br></br>
        <div className="uploadDiscImg">
        <img src=""></img></div>
        <input
          type="file"
          id="upload4"
          onChange={event => handleImageChange(event, 4)}
          hidden
        />
        {isEmpty[4] ? (
          <div className="centerImg"><img
            className=" defaultImage"
            src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
            width="150px"
            height="150px"
            margin-left="36%"
          ></img></div>
        ) : (
          <div className="centerImg"><img
            src={image[4]}
            width="150px"
            height="150px"
            className="uploadedImage"></img></div>
        )}

        <div className="fileBorder">
          <label for="upload4" className="uploadFile">
            Choose file
          </label>
          <br></br>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* <input type="submit" className="submitPlant" value="Submit" /> */}
        <button
          type="button"
          className="submitPlant"
          onClick={event => handleSubmit(event)}
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default AddDiscoverForm;
