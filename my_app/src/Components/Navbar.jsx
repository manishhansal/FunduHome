import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import funduLogo from "../assets/fundu_logo.jpeg";


const Navbar = () => {
    return (
        <nav className='navbarDiv'>
            <div>
            <img
              style={{ width: "140px", height: "40px" }}
              src={funduLogo}
              alt="logo"
            />
           
            </div>
            <div >
            <Link  to='/'><div className='link1'>Home</div></Link>
                <Link to='about'><div>About</div></Link>
               <Link to='/service'><div>Service</div></Link>
               <Link to='/'><div>Product</div></Link>
                <Link to='/'><div>Contact</div></Link>
                <div className='login'>
                <Link to='/'><div>Login</div></Link>
                </div>
            </div>
          
        </nav>
    )
}

export default Navbar;