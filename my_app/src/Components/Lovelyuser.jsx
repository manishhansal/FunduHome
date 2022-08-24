import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { achive, gamresOnSale, mostPopular, SlideImgs, slideImages, threeData, twoData } from './Data';
import "./fundugrow.css";

const Lovelyuser = () => {
    return (
     
        <>
   <div className="join">
              <div className="f2">What Our </div>
              <div className="f2">
                {" "}
                <span className="span1t">Lovely User </span>Are Saying   <span className="span1t">About Us </span>
              </div>
             
            </div>
        <div className='sliderImg'>
            <Slide>
                { SlideImgs.map(( SlideImg, index) => (
                    <div className="each-slide" key={index}>
                        <img className='S_img' src={ SlideImg.url} />
                        <span>{ SlideImg.caption}</span>
                    </div>
                ))}
            </Slide>
        </div>
       
       
    </>
            )
            }
            export default Lovelyuser;