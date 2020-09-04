import React from "react";
import { SiHtml5,SiCss3,SiJavascript,SiReact,SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { BsHeartFill } from "react-icons/bs"
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
                <div
                    
                    className="h2"
                    >
                    endgame
                </div>
                    <div
                    
                    className="h2"
                    >
                    passion
                </div>
                <div
                  
                    className="h2"
                    >
                    tech
                </div>
               
               
                
            {/*  <
                <h2 className="h2">My companions :</h2> 
                    <SiHtml5 className={classNames('icon','html')}/>  
                    <SiCss3 className={classNames('icon','css')}/> 
                    <SiJavascript className={classNames('icon','js')}/> 
                    <SiReact className={classNames('icon','react')}/>
                <h2 className="h2">Endgame : &#123;...My companions,<FaNodeJs className={classNames('icon','node')} />,<SiMongodb className={classNames('icon','mongo')}/>,&#125;</h2>
                <h2 className="h2">I <BsHeartFill className={classNames('icon','heart')}/> the process of learning.</h2>
                <h2 className="h2">I might even be addicted to it ...</h2>
                <h2 className="h2">The technologies themselves are not that important</h2> */}
            </div>
            
           

            
           
        </div>
    )
}

export default About;


