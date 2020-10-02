import React from "react";
import classes from "./Home.module.css";
import { AiFillMail,AiFillPhone,AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import Projects from "../Projcets/Projects";
const Home = () => {
    return (
        <div className={classes.main}>
            <div className={classes.wrapper}>
                <h1 className={classes.hello}>Hello,I`m</h1><br/>
                <h1 className={classes.name}>Stefan <span className={classes.span}>Hadzhiev</span></h1><br/>
                <h2 className={classes.greet}>Web Developer</h2>
                <div style={{color:"#fff",display:"flex",flexDirection:"column"}}>
                    <p style={{margin:"0.5rem"}}><ImLocation style={{verticalAlign:"middle"}}/> : Sofia,BG</p>
                    <p style={{margin:"0.5rem"}}><AiFillPhone style={{verticalAlign:"middle"}}/> : +(359)899928238</p>
                    <p style={{margin:"0.5rem"}}><AiFillMail style={{verticalAlign:"middle"}}/> : stefanghadjiew@abv.bg</p>
                </div>
                <button 
                    onClick={()=> {window.open("https://drive.google.com/file/d/1Iscu2Y3t7cVIFrW_7_lsFhqdaegVsD9O/view?usp=sharing","_blank")}}
                    className={classes.button}>
                    Resume
                    </button>
                    <Projects/>
            </div>
            <div className={classes.social}>
                <AiFillLinkedin
                className={classes.icon}
                onClick={() => window.open("linkedin.com/in/stefan-hadzhiev-89a4411b8","_blank")}
                network="linkedin"/>
                <AiFillGithub
                className={classes.icon}
                onClick={() =>window.open("https://github.com/stefanghadjiew","_blank")}
                network="github"
                />
            </div>
        </div>
    )
}


export default Home;