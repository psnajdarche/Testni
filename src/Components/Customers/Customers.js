import React from 'react';
import { useState } from 'react';
import '../Customers/Customers.css'
function Customers() {
   
    return (
        <div className='customers-container'>
            <div className='left-img'>
               <div  className='left-img-one'></div>
               {/* {background2 && <div onClick={()=>{setBackGround(false)}} className='left-img-two'></div>} */}
            </div>
            <div className='right-text-container'>
                <div className='right-title'>
                    <h3>Technology</h3>
                    <h2>Impressing our customers</h2>
                </div>
                <div className='right-text'><p>Lorem Ipsum is simply dummy text.</p></div>
                <div className='right-card-one'>
                <div><span>Lorem</span>
                <p>Lorem Ipsum is simply dummy text</p></div>
                    </div>
                <div className='right-card-two'>
                <div><span>Lorem</span>
                <p>Lorem Ipsum is simply dummy text</p></div>
                </div>
            </div>
        </div>
    );
}

export default Customers;