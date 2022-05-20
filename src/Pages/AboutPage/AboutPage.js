 import React from 'react';
 import Navbar from '../../Components/Navbar/Navbar';
 import "../AboutPage/AboutPage.css"
 function AboutPage(props) {
     return (
         <div className='about-page'>
             <Navbar isOpen={props.isOpen} setIsOpen={props.setIsOpen}></Navbar>
         </div>
     );
 }
 
 export default AboutPage;