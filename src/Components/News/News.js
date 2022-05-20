import React from 'react';
import '../News/News.css'
import { useState } from 'react/cjs/react.development';
import Details from '../ModalDetails/Details';
import CardNew from '../CardNews/CardNew';
function News(props) {
    const[details,setDetails]=useState(false)
    const[idNews,setIdNews]=useState({})
    const[contentfilter,setContent]=useState("")
    return (
        <div className='New-container'>
            <h3>Curiosity</h3>
            <h2>New and trends</h2>
            <div className='search-title'>
            <span>Search title</span>
            
            <input
            className="contentsearch"
            type="text"
            placeholder="Search"
            name="search"
            
            onChange={(e) => setContent(e.target.value)}
          ></input></div>
            <div className='New-container'>
           <div className='card-wrapper'>
               {props.card.filter((value)=>{
                    if(contentfilter=="")
               {
                   return value;
               }
               else if(value.title.toLowerCase().includes(contentfilter.toLowerCase()))
               {
               return value}
               })
               
               
               
               .map((e,i)=>{
                 return(  <CardNew
                    setDetails={setDetails}
                    setIdNews={setIdNews}    news={e}></CardNew>);
               })}
           </div></div>
              {details && (<Details  setDetails={setDetails}
                         setIdNews={setIdNews}
                         idNews={idNews}
                         details={details}
                         card={props.card}
               ></Details>)}
        </div>
    );
}

export default News;