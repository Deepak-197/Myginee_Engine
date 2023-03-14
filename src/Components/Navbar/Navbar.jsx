import React from 'react';
import "./Navbar.css";
import gineelogo from '../../assets/ginee_logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='nav'>
      <div className='navbar'>
          {/* <h1>Navbar</h1> */}
          
          <div className='navbar_logo'>
              <img src={gineelogo} alt="ginee" width="180px" height="30px" />
          </div>
          <div className='navbar_search'>
            <input placeholder=' 🔍  Make a wish...     ' />
           
          </div>
          <div className='navbar_signin_register'>
            <Link to={"/register"}><p>SignIn/Register</p></Link>
          </div>
      </div>
    </div>
  )
}
