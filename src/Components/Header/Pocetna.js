import  React from 'react'
import '../Header/Pocetna.css'
import ModalVideo from '../ModalVideo/ModalVideo'
export default function Pocetna(props){
    return(
        <div className='pocetna-container'>
            <div className='naslov'>
                <h1>We make digital</h1>
                <h1>business simple</h1>
                <p>In everything we do, we simply want to inspire people. Through our idea we overNNN brands and inepho  their outmers. We create great digital experionoes for your visitors. </p>
            </div>
            <div className='hero-button'>
                <div href='#' className='hero-button-explore'>Explore Here</div>
                <button className='hero-button-video' onClick={()=>{
                    props.setVideo(true);
                }
                    
                }>VIDEO</button>
            </div>
        </div>
    )
}