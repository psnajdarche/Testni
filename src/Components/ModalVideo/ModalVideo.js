import React from 'react';
import "../ModalVideo/ModalVideo.css"
import ReactPlayer from 'react-player';

function ModalVideo(props) {
    return (
        <div className='modal-container'>
            <div className='modal-main'>
            <button className='close-video'  onClick={()=>{
                    props.setVideo(false);
                }
                    
                }>X</button>
             <ReactPlayer className="video" url="https://www.youtube.com/watch?v=7vQznLKEfBs"></ReactPlayer>
             </div>
        </div>
    );
}

export default ModalVideo;