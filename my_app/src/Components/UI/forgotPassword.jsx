import React from 'react'
import './forgotPassword.css';
import { useNavigate} from 'react-router-dom';
import { LeftSidePannelWithLogo } from './leftSidePannelWithLogo';
import { AiOutlineLeft } from 'react-icons/ai';




const ForgotPassword = () => {
    const navigate = useNavigate();
  return (
    <div className="loginLangdingContainer">
            <LeftSidePannelWithLogo/>
            <div className="loginLandingRihgt">
                <div className="headerWithBackButton">
                    <AiOutlineLeft className='backButtonIcon'/>
                    <span className="backButton" onClick={()=>navigate(-1)}> Back </span>
                </div>
                <div className="loginLandingContentBox">
                    

                    <h3>Reset password</h3>
                    
                    <p>Please provide the email you signed up with.</p><br />
                    
                    <input type="text" placeholder='Email'className='inputemail' />
                    <br />
                    <br />
                    <button id='nextButtonOnSignup' className='buttonlogin'>Reset</button>
                 </div>
                </div>
        </div>
  )
}


export default ForgotPassword;