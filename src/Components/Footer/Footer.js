import React from 'react';
import '../Footer/Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-one'>
                <span>Contact us.</span>
                <span>Lets Talk.</span>
            </div>
            <div className='footer-two'>
                <div className='footer-two-up'><span>Resource</span></div>
                <div className='footer-two-down'>
                    <span>About</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                </div>
            </div>
            <div className='footer-tree'>
            <div className='footer-tree-up'><span>Where we are?</span></div>
                <div className='footer-tree-down'>
                    <span>Pere Velimirovica 29</span>
                    
                </div>
            </div>
            <div className='footer-four'>
            <div className='footer-four-up'><span>Our contact info</span></div>
                <div className='footer-four-down'>
                    <span>+381692308088</span>
                    <span>psnajdar.che@gmail.com</span>
                    </div>
            </div>
        </div>
    );
}

export default Footer;