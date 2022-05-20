import React from 'react';
import "../../Components/CardNews/CardNews.css"
function CardNew(props) {
    return (
        <div>
            <div className="card">
                <div className='card-img'>
                <img src={props.news.image} alt={props.news.className} /></div>
                <div>
                <span className='title'>{props.news.title}</span> 
                </div>
                <div>
                <button className='card-button' onClick={()=>{
                    props.setIdNews(props.news)
                    props.setDetails(true)
                }}>details</button></div>
                </div>
        
       
       
      </div>
        
    );
}

export default CardNew;