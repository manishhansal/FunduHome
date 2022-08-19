import React from 'react'
 import './signup.css';
import { useNavigate} from 'react-router-dom';
import { LeftSidePannelWithLogo } from './leftSidePannelWithLogo';
import { AiOutlineLeft } from 'react-icons/ai';




const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = React.useState({
      email: " ",
      username: "",
      password: "",
      age: "",
      description: "",
      mobile: "",
    });
    const handleChange = (e) => {
      const { id, value } = e.target;
      setForm({
        ...form,
        [id]: value,
      });
    };
    const handleSignup = (e) => {
      e.preventDefault();
      if (
        form.username !== "" &&
        form.username !== "" &&
        form.password !== "" &&
        form.age !== "" &&
        form.description !== "" &&
        form.mobile !== ""
      ) {
        const payloadjson = JSON.stringify(form);
  
        fetch(`https://fundu.herokuapp.com/signUp`, {
          method: "POST",
          body: payloadjson,
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              alert("SignUp successfully. Now you can login.");
              navigate("/login");
            }
          })
          .catch((err) => console.log(err));
      } else {
        alert("All fields are required.");
      }
    };
    const {email, username, password, age, description, mobile } = form;
  return (
    <div className="loginLangdingContainer">
            <LeftSidePannelWithLogo/>
            <div className="loginLandingRihgt">
                <div className="headerWithBackButton">
                    <AiOutlineLeft className='backButtonIcon'/>
                    <span className="backButton" onClick={()=>navigate(-1)}> Back </span>
                </div>
                <div className="loginLandingContentBox">
                <form onSubmit={handleSignup}>

                    <h3 className='h33'>Enter your email</h3>
                    
                    <p>You’ll use it to log in to FundU</p><br />
                    
     <input 
     type="email" 
     placeholder='Email'
     className='inputemail' 
     id="email"
     value={email}
     onChange={handleChange}/>

              
                    <br />
                    <input
            type="text"
            className='inputemail'
            placeholder="Enter username"
            id="username"
            value={username}
            onChange={handleChange}
          />
          <br></br>

          <input
            type="password"
            className='inputemail'
            placeholder="Enter password"
            id="password"
            value={password}
            onChange={handleChange}
          />
          <br></br>


          <input
            type="number"
            className='inputemail'
            placeholder="Enter age"
            id="age"
            value={age}
            onChange={handleChange}
          />
          <br></br>
   
          <input
            type="text"
            className='inputemail'
            placeholder="Enter description"
            id="description"
            value={description}
            onChange={handleChange}
          />
        
        <br></br>
    
          <input
            type="tel"
            className='inputemail'
            placeholder="Enter mobile"
            id="mobile"
            value={mobile}
            onChange={handleChange}
          />

             {/* <button id='nextButtonOnSignup' className='buttonlogin'>SignUp</button> */}
{/* <br></br> */}
             <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
             </form>
                 </div>
        
                </div>
            
        </div>
  )
}



export default Signup;