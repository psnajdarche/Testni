import React from 'react';
import ReactPlayer from 'react-player';
import Navbar from '../../Components/Navbar/Navbar';
import "../BlogPage/BlogPage.css"
function BlogPage(props) {
    return (
        <div className='blog-page'>
           <Navbar isOpen={props.isOpen} setIsOpen={props.setIsOpen}></Navbar>
        </div>
    );
}

export default BlogPage;