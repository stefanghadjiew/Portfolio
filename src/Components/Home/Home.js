import React, { useState }  from "react";
import classes from "./Home.module.css"
import { Link } from "react-router-dom"
import { FaHandPeace,FaFacebook,FaInstagram } from "react-icons/fa"
import { Animated } from "react-animated-css";
import { AiFillTwitterCircle } from "react-icons/ai"



const Home = () => {
    
   return (
        <div className={classes.home}>
            <div className={classes.wrapper}>
                <Link to="/projects">
                <button className={classes.button}>See Projects</button>
                </Link>
                <h2 className={classes.greet}>Hello! My Name is</h2>
                <Animated
                animateOnMount={true}
                animationIn="pulse" 
                >
                <h1 className={classes.name}>Stefan <span className={classes.span}>Hadzhiev</span></h1>
                </Animated>
                <h2 className={classes.greet}>I would <span className={classes.span}>love to become</span> a Frontend Web Developer <span className={classes.span}><FaHandPeace className={classes.react}/></span></h2>
            </div>
            <div className={classes.social}>
                <FaFacebook 
                className={classes.icon}
                onClick={()=>window.open("https://www.facebook.com/search/top?q=cheffo0o","_blank")} 
                network="facebook"/>
                <AiFillTwitterCircle 
                className={classes.icon}
                onClick={()=>window.open("https://twitter.com/SHadjiew","_blank")} 
                network="twitter"/>
                <FaInstagram 
                className={classes.icon}
                onClick={()=>window.open("https://www.instagram.com/cheffohadjiev/","_blank")}  
                network="instagram"/>
            </div>
        </div>
    )
}


export default Home;