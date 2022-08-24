import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { achive, gamresOnSale, mostPopular, slideImages, threeData, twoData } from './Data';


const Slider = () => {
    return (
     
        <>
   
        <div className='sliderImg'>
        <div className="posts_main_div">
      <h1>
        Play With <strong> Ease</strong>
      </h1>
      </div>
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <img className='slie_img' src={slideImage.url} />
                        <span>{slideImage.caption}</span>
                    </div>
                ))}
            </Slide>
        </div>
       
       
    </>
            )
            }
            export default Slider;