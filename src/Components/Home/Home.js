import React from "react";
import classes from "./Home.module.css";
import { FaFacebook,FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillMail,AiFillPhone} from "react-icons/ai"
import {ImLocation} from "react-icons/im"

const Home = () => {
    return (
        <div className={classes.main}>
            <h1 className={classes.hello}>Hello,I`m</h1><br/>
            <h1 className={classes.name}>Stefan <span className={classes.span}>Hadzhiev</span></h1>
            <h2 className={classes.greet}>Web Developer</h2>
            <div style={{color:"#fff",display:"flex",flexDirection:"column"}}>
                <p style={{margin:"0.5rem"}}><ImLocation style={{verticalAlign:"middle"}}/> : Sofia,BG</p>
                <p style={{margin:"0.5rem"}}><AiFillPhone style={{verticalAlign:"middle"}}/> : +(359)899928238</p>
                <p style={{margin:"0.5rem"}}><AiFillMail style={{verticalAlign:"middle"}}/> : stefanghadjiew@abv.bg</p>
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
                <button 
                onClick={()=> {window.open("https://drive.google.com/file/d/1Iscu2Y3t7cVIFrW_7_lsFhqdaegVsD9O/view?usp=sharing","_blank")}}
                className={classes.button}>
                Resume
                </button>
            
        </div>
    )
}


export default Home;