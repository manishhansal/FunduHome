import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./start.css";
import imageFolder3 from "../imageFolder/slider1.jpeg";



const Startslider = () => {
    return (
     
        <>
   
   <div className="sidebar">
      <a href="#" >01</a>
      <a href="##"> 02</a>
      <a href="###"> 03</a>
      <a href="####"> 04</a>
    </div>

    
    <div className="main">
<img src= {imageFolder3} alt="" classNa="img-fluid" />
        
    </div>
       
       
       
    </>
            )
            }
            export default Startslider;