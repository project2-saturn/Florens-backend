 
import React, { useState } from "react";
import AWS from "aws-sdk";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddDiscoverForm = props => {
    /////////////////////////////Location/////////////////////////////////////////////////
    const [tags, setTags] = useState([])


    function handleKeyDown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index) {
        setTags(tags.filter((el, i) => i !== index))
    }
    //////////////////////////Plant Type/////////////////////////////////////////////////
    const [planttags, setPlanttags] = useState([])


    function handleKeyPlant(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setPlanttags([...planttags, value])
        e.target.value = ''
    }

    function removePlanttag(index1) {
        setPlanttags(planttags.filter((el, i) => i !== index1))
    }
    ////////////////////////////////////color////////////////////////////////////////////////
    const [colortags, setColortags] = useState([])


    function handleKeyColor(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setColortags([...colortags, value])
        e.target.value = ''
    }

    function removeColortag(index2) {
        setColortags(colortags.filter((el, i) => i !== index2))
    }

    ////////////////////////////////////Season/////////////////////////////////////////////////
    const [seasontags, setSeasontags] = useState([])


    function handleKeySeason(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setSeasontags([...seasontags, value])
        e.target.value = ''
    }

    function removeSeasontag(index3) {
        setSeasontags(seasontags.filter((el, i) => i !== index3))
    }

    ////////////////////////////////////Form///////////////////////////////////////////////////

    const [formtags, setFormtags] = useState([])


    function handleKeyForm(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setFormtags([...formtags, value])
        e.target.value = ''
    }

    function removeFormtag(index4) {
        setFormtags(formtags.filter((el, i) => i !== index4))
    }
    ////////////////////////////////////texture/////////////////////////////////////////////////
    const [texturetags, setTexturetags] = useState([])


    function handleKeyTexture(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTexturetags([...texturetags, value])
        e.target.value = ''
    }

    function removeTexturetag(index5) {
        setTexturetags(texturetags.filter((el, i) => i !== index5))
    }
    ////////////////////////////////////////images/////////////////////////////////////////////
    const navigator=useNavigate();
    const[plantname,setPlantname]=useState();
    const[scientificname,setScientificname]=useState();
     
    const[image,setImage]=useState();
    const[isEmpty,setIsEmpty]=useState(true);
    const[picture,setPicture]=useState(null);
    const [error, setError] = useState();

    
    const handleChangePlantName=(event)=>{

        setPlantname(event.target.value);
    
    }
    const handleChangeScientificName=(event)=>{
    
        setScientificname(event.target.value);
    
    }


    const handleImageChange=(event)=>{
    console.log(event.target.files[0]);
    setPicture(event.target.files[0]);
    
    setImage(URL.createObjectURL(event.target.files[0]) )  ;
    setIsEmpty(false);
   }

   const handleSubmit=(event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append('plantname',plantname);
    formData.append('scientificname',scientificname);
    formData.append('tags',tags);
    formData.append('planttags',planttags);
    formData.append('colortags',colortags);
    formData.append('seasontags',seasontags);
    formData.append('formtags',formtags);
    formData.append('texturetags',texturetags);
    formData.append('image',picture);
    
    console.log(picture);
    axios.post("/",formData).then((result) => {
        console.log(result);
        // setPicture(result.data.image);
        console.log(image);
        navigator("/");
    
    }).catch((err) => {
        setError(err.response.data.message);
    });
        
   }
    ///////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className="addDiscoveryPageDiv">
            <h1 className="addDiscoveryPageHeading">Add a Discovery</h1>
            <p className="addDiscoveryPageParagraph">We encourage you to add any plant discovery you had, however,<br/>keep in mind 
                that we require accurate information in order to keep <br/>our community a reliable place.</p>
            <form className="formAddDiscovery" onSubmit={handleSubmit} enctype="multipart/form-data">
                <div className="addDiscoveryFormItems">
                <label for="name">Name</label>
                <input type="text" className="plantNameInput" name="plantName" required onChange={event => handleChangePlantName(event)} />
                </div>
                <div className="addDiscoveryFormItems">
                <label for="sname">Scientific Name</label>
                <input type="text" className="scientificNameInput" name="scientificName" required onChange={event => handleChangeScientificName(event)} />
                </div>

                {/*//////////////////////////////////// Location container/////////////////////////////////////// */}
                <div className="addDiscoveryFormItems">
                <label for="location">Location</label>
                <div className="tags-input-container">
                    {tags.map((tag, index) => (
                        <div className="tag-item" key={index}>
                            <span className="text">{tag}</span>
                            <span className="close" onClick={() => removeTag(index)}>&times; </span>
                        </div>
                    ))}

                    <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="All" />
                </div>
                </div>
                {/*////////////////////////////////////////// Plant Type/////////////////////////////////////// */}
                <div className="addDiscoveryFormItems1">
                <label for="planttype">Plant Type</label>
                <div className="plantType">
                    {planttags.map((planttag, index1) => (
                        <div className="planttype-item" key={index1}>
                            <span className="text">{planttag}</span>
                            <span className="close" onClick={() => removePlanttag(index1)}>&times; </span>
                        </div>
                    ))}

                    <input onKeyDown={handleKeyPlant} type="text" className="planttype-input" placeholder="All" />
                </div>
                </div>
                {/* ////////////////////////////////////Color/////////////////////////////////////////////////// */}
                <div className="addDiscoveryFormItems">
                <label for="colortype">Color</label>
                <div className="colorType">
                    {colortags.map((colortag, index2) => (
                        <div className="colortype-item" key={index2}>
                            <span className="text">{colortag}</span>
                            <span className="close" onClick={() => removeColortag(index2)}>&times; </span>
                        </div>
                    ))}

                    <input onKeyDown={handleKeyColor} type="text" className="colortype-input" placeholder="All" />
                </div>
                </div>
                {/* ///////////////////////////////////Season/////////////////////////////////////////////////// */}
                <div className="addDiscoveryFormItems1">
                <label for="seasontype">Season</label>
                <div className="seasonType">
                    {seasontags.map((seasontag, index3) => (
                        <div className="seasontype-item" key={index3}>
                            <span className="text">{seasontag}</span>
                            <span className="close" onClick={() => removeSeasontag(index3)}>&times; </span>
                        </div>
                    ))}

                    <input onKeyDown={handleKeySeason} type="text" className="seasontype-input" placeholder="All" />
                </div>
                </div>
                {/* //////////////////////////////////form////////////////////////////////////////////////////// */}
                <div className="addDiscoveryFormItems">
                <label for="formtype">Form</label>
                <div className="formType">
                    {formtags.map((formtag, index4) => (
                        <div className="formtype-item" key={index4}>
                            <span className="text">{formtag}</span>
                            <span className="close" onClick={() => removeFormtag(index4)}>&times; </span>
                        </div>
                    ))}

                    <input onKeyDown={handleKeyForm} type="text" className="formtype-input" placeholder="All" />
                </div>
                </div>
                {/* ///////////////////////////////////texture////////////////////////////////////////////////// */}
                <div className="addDiscoveryFormItems1">
                <label for="texturetype">Form</label>
                <div className="textureType">
                    {texturetags.map((texturetag, index5) => (
                        <div className="texturetype-item" key={index5}>
                            <span className="text">{texturetag}</span>
                            <span className="close" onClick={() => removeTexturetag(index5)}>&times; </span>
                        </div>
                    ))}

                    <input onKeyDown={handleKeyTexture} type="text" className="texturetype-input" placeholder="All" />
                </div>
                </div>
                {/* //////////////////////////////////Description/////////////////////////////////////////////// */}
                <div className="addDiscoveryFormItems">
                <label for="description">Description</label>
                <textarea class="descriptionPlant" >Add Plant Description...</textarea>
                </div>
                {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="addDiscoveryFormItems">
                <label>Add Photos*</label><br></br>
                <img src=""></img>
                <input type="file" id="upload" onChange={event => handleImageChange(event)} hidden />
                {isEmpty ? <img className=" defaultImage" src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image.png" width="150px" height="150px" margin-left="36%" ></img> : <img src={image} width="150px" height="150px" className="uploadedImage" ></img>}

                <div className="fileBorder">
                    <label for="upload" className="uploadFile" >Choose file</label><br></br></div>
                </div>
                {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* <input type="submit" className="submitPlant" value="Submit" /> */}
                <div className="addDiscoveryFormItems">
                <button type="button" className="submitPlant" onClick={(event) => handleSubmit(event)}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddDiscoverForm;

