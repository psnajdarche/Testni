import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "../ContactPage/ContactPage.css"
function ContactPage(props) {
    return (
        <div className='contact-page'>
            <Navbar isOpen={props.isOpen} setIsOpen={props.setIsOpen}></Navbar>
        </div>
    );
}

export default ContactPage;