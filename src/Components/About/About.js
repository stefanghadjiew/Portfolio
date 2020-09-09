import React from "react";
import { SiHtml5,SiCss3,SiJavascript,SiReact,SiMongodb } from "react-icons/si"
import { FaNodeJs,FaWalking } from "react-icons/fa"
import classNames from "classnames"
import "./About.css"

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
                    friends
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
                        The process of constantly learning is my fuel.
                        I have yet to encounter a technology that doesent fascinate me,
                        both front and back-end...
                        Learning is my passion!
                    </div>
                </div>
            </div>
            <div className="button-wrapper">
                <button 
                onClick={()=> {window.open("https://drive.google.com/file/d/1Iscu2Y3t7cVIFrW_7_lsFhqdaegVsD9O/view?usp=sharing","_blank")}}
                className="button">Resume</button>
            </div>
        </div>
       
    )
}

export default About;


