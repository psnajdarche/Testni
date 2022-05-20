import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.production.min';

import  '../Navbar/Navbar.css'
function Navbar(props) {
   
    return (
        <div className='nav-wrapper'>
            <div className='nav-left'>
                <div className='nav-name'>asioso</div>
            </div>
            <div className='nav-right'>
                <div className={`nav-list ${props.isOpen && "open"}`}> 
                <ul>
                    <li><Link to='/' className='nav'>Home</Link></li>
                    <li><Link to='/about' className='nav'>About</Link></li>
                    <li><Link to='/blog' className='nav'>Blog</Link></li>
                    <li><Link to='/contact'className='nav'>Contact</Link></li>
                    </ul>
                    
                </div>
                <button className='contact'>0692308088</button>
                <div className={`hamburger ${props.isOpen && "open"}`} onClick={()=>props.setIsOpen(!props.isOpen)}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;