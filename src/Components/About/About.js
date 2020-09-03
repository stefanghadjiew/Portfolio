import React from "react";
import classes from "./About.module.css"
import { SiHtml5,SiCss3,SiJavascript,SiReact,SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"


const About = () => {
    return (
        <div className={classes.about}>
            <h2>My journey began march of 2020.<br/>
            My companions : <SiHtml5 className={classes.html}/> <SiCss3/> <SiJavascript/> <SiReact/><br/>
            Endgame : &#123;...My companions,<FaNodeJs />,<SiMongodb/>,&#125;<br/>
            I love the process of learning.<br/>
            I might even be addicted to it ...<br/>
            The technologies themselves are not that important       
            </h2>
        </div>
    )
}

export default About;