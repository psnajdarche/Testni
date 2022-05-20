import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import Navbar from './Components/Navbar/Navbar';
function App(props)  {
  const [newscard,setNewsCard]=useState([]);
 
  const[isOpen,setIsOpen]=useState(false);
  const[modalVideo,setVideo]=useState(false);
 
  useEffect(() => {
         fetch(`https://gnews.io/api/v4/top-headlines?token=c9d72eb31ee11fb525401a3325e15529&lang=en`)
        .then((res) => res.json())
        // .then((res)=>console.log(res))
        .then((res) => setNewsCard(res.articles));
  }, []);
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/">
    <HomePage
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    card={newscard}
    modalVideo={modalVideo}
    setVideo={setVideo}
    ></HomePage></Route>
    <Route path="/about"><AboutPage  isOpen={isOpen}
    setIsOpen={setIsOpen}></AboutPage></Route>
    <Route path="/blog"><BlogPage  isOpen={isOpen}
    setIsOpen={setIsOpen}></BlogPage></Route>
    <Route path="/contact"><ContactPage isOpen={isOpen}
    setIsOpen={setIsOpen}></ContactPage></Route>
    </Switch></div>
    </Router>
  );
}

export default App;
