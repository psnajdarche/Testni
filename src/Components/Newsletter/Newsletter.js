import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../Newsletter/Newsletter.css'
function Newsletter() {
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
    const mailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
          setMessage("Email is Valid");
        } else if (!regEx.test(email) && email !== "") {
          setMessage("Email is Not Valid");
        } else {
          setMessage("");
        }
      };
    
     
   
    return (
        <div className='newsletter-container'>
            <div className='newsletter-left'>
                <span>Subscribe to your</span>
                <span>Newsletter</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='newsletter-right'>
              <div>  <input className='newsletter-search'
                type='text'
                placeholder="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                ></input></div>
                <div><button onClick={mailValidation}>Submit</button></div>
                <p className="message">{message}</p>
            </div>
        </div>
    );
}

export default Newsletter;