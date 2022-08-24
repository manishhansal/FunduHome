import React from 'react'
import imageFolder1 from "../imageFolder/div1.jpeg";
import imageFolder2 from "../imageFolder/div2.jpeg";
import imageFolder3 from "../imageFolder/div3.jpeg";
import imageFolder4 from "../imageFolder/div4.jpeg";
import imageFolder5 from "../imageFolder/div5.jpeg";

import "./fundugrow.css";

export const Fundu = () => {
  return (
    <div>
           <div className="join">
              <div className="f2">Join the</div>
              <div className="f2">
                {" "}
                <span className="span1t">growing result </span>today <p className='p_txt'>“Social network for retail traders community”</p>

              </div>
             
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
            
        <div className='image_main'>
     
<div>
<img className='img1social' src={imageFolder1} alt="" />
<p className='p_txt'>Best platform for trading-related  knowledge sharing</p>
</div>
<div>
<img className='img1social' src={imageFolder2} alt="" />
<p className='p_txt'>Performance backed user rating system
</p>
</div>
<div>
<img className='img1social' src={imageFolder3} alt="" />
<p className='p_txt'>Amplifies the insights of top investors 
</p>
</div>
<div>
<img className='img1social' src={imageFolder4} alt="" />
<p className='p_txt'>Find best investors to follow and learn from
</p>
</div>
<div>
<img className='img1social' src={imageFolder5} alt="" />
<p className='p_txt'>Discover investment ideas
</p>
</div>
<div className="img1social1">
 <div className='sign'>
 <div className='sign1'>SignIN</div>
 <div className='sign2'>Login</div>
 </div>

</div>
        </div>
    </div>
  )
}
export default Fundu;