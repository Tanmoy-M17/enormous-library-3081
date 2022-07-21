import React,{useState} from "react";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Input,Select,FormControl,FormLabel} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import styles from "./Post.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera} from "@fortawesome/free-solid-svg-icons";
export const Post=()=>{

    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = e => {
      if (e.target.files.length) {
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
    };
  
    const handleUpload = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image.raw);
  
      await fetch("YOUR_URL", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: formData
      });
    };

    return <>
     <Heading fontSize={"24px"} fontWeight="700" color="#002f34">POST YOUR AD</Heading>
     <Box className={styles.box}>
     <Heading fontSize={"20px"} fontWeight="700" color="#002f34" marginLeft="-520px" marginBottom="20px">SELECTED CATEGORY</Heading>
     <Breadcrumb marginLeft="-590px" marginTop="20px" fontSize={"12px"} color="#5c7b80">
     <BreadcrumbItem>
     <BreadcrumbLink as={Link} to="/sell">OLX Auto (cars)</BreadcrumbLink>
     </BreadcrumbItem>
     <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink>Cars</BreadcrumbLink>
    </BreadcrumbItem>
     </Breadcrumb>
     <hr/>
     <Heading fontSize={"20px"} fontWeight="700" color="#002f34" marginLeft="-520px" marginBottom="20px" marginTop="20px">INCLUDE SOME DETAILS</Heading>
     {/* {form entries} */}
     <Box className={styles.formbox}>
     <form>
        <label>Brand *</label><br/>
        <select className={styles.inputbox}>
            <option value=""></option>
            <option value="Maruti">Maruti Suzuki</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Mahindra">Mahindra</option>
            <option value="Tata">Tata</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Land Rover">Land Rover</option>
            <option value="Honda">Honda</option>
            <option value="Bajaj">Bajaj</option>
        </select>
        <br/><br/>
        <label>Model *</label><br/>
        <input className={styles.inputbox}/>
        <br/><br/>
        <label>Variant *</label><br/>
        <input className={styles.inputbox}/>
        <br/><br/>
        <label>Year *</label><br/>
        <input className={styles.inputbox}/>
        <br/><br/>
        <label>Fuel *</label>
        <br/>
        <select className={styles.inputbox}>
            <option value=""></option>
            <option value="cng">CNG {"&"} Hybrid</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="lpg">LPG</option>
            <option value="petrol">Petrol</option>
        </select>
        <br/><br/>
        <label>Transmission *</label>
        <br/>
        <select className={styles.inputbox}>
            <option value=""></option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
            
        </select>
        <br/><br/>
        <label>KM Driven *</label><br/>
        <input className={styles.inputbox} type="number"/>
        <br/><br/>
        <label>No. of Owners *</label>
        <br/>
        <select className={styles.inputbox}>
            <option value=""></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="4+">4+</option>
        </select>
        <br/><br/>
        <label>Ad Title *</label><br/>
        <input className={styles.inputbox} type="text"/>
        <br/><br/>
        <label>Description *</label><br/>
        <textarea className={styles.inputbox} type="text"/>
        <br/><br/>
        <hr/>
        <h1 className={styles.formheading}>SET A PRICE</h1>
        <br/><br/>
        <label>Price *</label><br/>
        <input className={styles.inputbox} type="number" placeholder=" ₹ |"/>
        <br/><br/>
        <hr/>
        <h1 className={styles.formheading}>UPLOAD UPTO 20 PHOTOS</h1>
        <br/>
        {/* {photo uploading here} */}
        <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="200" height="200" />
        ) : (
          <>
          <Box className={styles.imagebox}>
          <FontAwesomeIcon icon={faCamera} className={styles.icon}/>
          </Box>  
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleUpload}>Upload</button>
      <br/>
      <hr/>
      <h1 className={styles.formheading}>CONFIRM YOUR LOCATION</h1>
      <br/>
      <br/>
      <label>State *</label><br/>
        <input className={styles.inputbox} type="text"/>
        <br/><br/>
        <label>City *</label><br/>
        <input className={styles.inputbox} type="text"/>
        <br/><br/>
        <label>Neighborhood *</label><br/>
        <input className={styles.inputbox} type="text"/>
        <br/><br/>
        <hr/>
        <button type="submit" className={styles.button}>Post now</button>
     </form>
    </Box>
    </Box>
    </>
}