import React from 'react';
import '../Focus/Focus.css'
function Focus() {
    return (
        
        <div className='focus-container'>
           <div className='focus-name'> <h3>What We Do?</h3>
            <h2>Our Focus</h2></div>
            
            <div className='focus-card'>
                <div className='customer'>
                    <span>
                    Customer
                    </span>
                    <span>Lorem Ipsum is simply dummy text.</span>
                    <button className='focus-btn'>View details</button>
                    </div>
                <div className='content'>
                <span>
                    Customer
                    </span>
                    <span>Lorem Ipsum is simply dummy text.</span>
                    <button className='focus-btn'>View details</button>
                </div>
                <div className='touchpoints'>
                <span>
                    Customer
                    </span>
                    <span>Lorem Ipsum is simply dummy text.</span>
                    <button className='focus-btn'>View details</button>
                </div>
                </div>
            
        </div>
        
    );
}

export default Focus;