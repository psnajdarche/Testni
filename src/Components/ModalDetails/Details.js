import React from 'react';
import "../ModalDetails/Details.css"
function Details(props) {
    return (
        <div className='details-container'>
            <div className='details-main'>
            <h3>{props.idNews.title}</h3>
            <div className='details-main-img'>
            <img src={props.idNews.image}  />
             </div>
             <span>{props.idNews.description}</span>
             <button className='details-button' onClick={()=>{
                 props.setDetails(false)
             }}>BACK</button>
            </div>
           
        </div>
    );
}

export default Details;