import React from "react";
import { SiHtml5,SiCss3,SiJavascript,SiReact,SiMongodb } from "react-icons/si"
import { FaNodeJs,FaWalking } from "react-icons/fa"
import classNames from "classnames"
import "./About.css"
import CV from "../../images/CV.pdf"
import { saveAs } from "file-saver";

const blob = new Blob ([CV],{type:"application/pdf;charset=utf-8 "})

const About = () => {
    return (
        <div>
            <div className="about">
                <div className="h2">
                    Journey
                    <div 
                    className="after-journey-hover">
                    <FaWalking className={classNames("icon","walking")}/>
                    My journey began march of 2020.
                    With the help of a friend,i dove into the web-developer world.
                    Loved every minute of it!Hope i`ll be able to do this for the rest of my life
                    </div> 
                </div>
                <div className="h2">
                    companions
                    <div className="after-journey-hover">
                        <SiHtml5 className={classNames('icon','html')}/>  
                        <SiCss3 className={classNames('icon','css')}/> 
                        <SiJavascript className={classNames('icon','js')}/> 
                        <SiReact className={classNames('icon','react')}/>
                    </div>
                </div>
                <div className="h2">
                    endgame
                    <div className="after-journey-hover">
                        <SiHtml5 className={classNames('icon','html-1')}/>  
                        <SiCss3 className={classNames('icon','css')}/> 
                        <SiJavascript className={classNames('icon','js')}/> 
                        <SiReact className={classNames('icon','react')}/>
                        <FaNodeJs className={classNames('icon','node')} />
                        <SiMongodb className={classNames('icon','mongo')}/>
                    </div> 
                </div>
                <div className="h2">
                    passion
                    <div className="after-journey-hover">
                        The process of constantly learning is what drives me.
                        I come from an industry where the rules are very strict,
                        there isn`t much room for expanding ones knowledge,atleast
                        compared to the flexibility of web-development.
                        Learning is my passion!
                    </div>
                </div>
            </div>
            <div className="button-wrapper">
                <button 
                onClick = {()=>{saveAs(blob)}}
                className="button">Resume</button>
            </div>
        </div>
       
    )
}

export default About;


