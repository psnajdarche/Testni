import React from 'react';
import '../HomePage/HomePage.css'
import Pocetna from '../../Components/Header/Pocetna';
import Focus from '../../Components/Focus/Focus';
import Customers from '../../Components/Customers/Customers';
import News from '../../Components/News/News';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import ModalVideo from '../../Components/ModalVideo/ModalVideo';
import { useEffect } from 'react/cjs/react.production.min';
function HomePage(props) {
    
    return (
        <div>
               <div className='heder'><Navbar isOpen={props.isOpen} setIsOpen={props.setIsOpen}></Navbar>
             <Pocetna modalVideo={props.modalVideo}
             setVideo={props.setVideo}
             ></Pocetna></div> 
       {props.modalVideo && ( <> <ModalVideo modalVideo={props.modalVideo}
                setVideo={props.setVideo}
                ></ModalVideo></>)}
                <Focus></Focus>
                <Customers></Customers>
                <News card={props.card}></News>
                <Newsletter></Newsletter>
                <Footer></Footer>
                
        </div>
    );
}

export default HomePage;