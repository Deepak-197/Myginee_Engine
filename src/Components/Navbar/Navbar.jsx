import React from 'react';
import "./Navbar.css";
import gineelogo from '../../assets/ginee_logo.png';

export const Navbar = () => {
  return (
    <div className='nav'>
      <div className='navbar'>
          {/* <h1>Navbar</h1> */}
          <div className='navbar_logo'>
              <img src={gineelogo} alt="ginee" width="200px" height="40px" />
          </div>
          <div className='navbar_search'>
            <input placeholder=' 🔍  Make a wish...     ' />
           
          </div>
          <div className='navbar_signin_register'>
            <p>SignIn / Register</p>
          </div>
      </div>
    </div>
  )
}
