import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { achive, gamresOnSale, mostPopular, slideImages, threeData, twoData } from './Data';


const Slider = () => {
    return (
     
        <>
   
        <div className='sliderImg'>
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <img width="100%" height="50%" src={slideImage.url} />
                        <span>{slideImage.caption}</span>
                    </div>
                ))}
            </Slide>
        </div>
       
       
    </>
            )
            }
            export default Slider;