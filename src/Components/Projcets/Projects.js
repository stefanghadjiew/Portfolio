import React from "react";
import "./Projects.css";
import img1 from "../../images/wallhaven-nzz9pv.jpg"
import img2 from "../../images/wallhaven-45kmo3.jpg"
import img3 from "../../images/wallhaven-nmx16y.jpg"
import img4 from "../../images/wallhaven-kw1o87.jpg"
import { AiFillGithub } from "react-icons/ai"
import { FaSass } from "react-icons/fa"
import { SiHtml5,SiJavascript,SiMongodb,SiCss3,SiReact } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import classNames from "classnames"

const Projects = () => {
    return (
        <div className="projects">
            <div className="project">
                <img src={img1} alt="e-commerce watches website"/>
                <div className="project-btns">
                    <div className="tech">
                        <SiHtml5 className={classNames("icon","html-1")}/>
                        <FaSass className={classNames("icon","sass")}/>
                        <SiJavascript className={classNames("icon","js")}/>
                        <FaNodeJs className={classNames("icon","node")}/>
                        <SiMongodb className={classNames("icon","mongo")}/>
                    </div>
                    <p>An e-commerce website for watches with user auth and cart</p>
                    <button
                     onClick={()=>window.open("https://github.com/stefanghadjiew/MyFirstWebSite","_blank")} 
                     network="github"
                    className="project-btn">
                    <AiFillGithub/>
                    Github
                    </button>
                </div>
            </div>
            <div className="project">
                <img src={img2} alt="to-watch app"/>
                <div className="project-btns">
                    <div className="tech">
                        <SiCss3 className={classNames("icon","css")}/>
                        <SiReact className={classNames('icon','react')}/>
                        <FaNodeJs className={classNames("icon","node")}/>
                        <SiMongodb className={classNames("icon","mongo")}/>
                    </div>
                    <p>Simple To-Watch App with user auth</p>
                    <button
                    onClick={()=>window.open("https://github.com/stefanghadjiew/React-App","_blank")} 
                    network="github" 
                    className="project-btn">
                    <AiFillGithub/>
                    Github
                    </button>
                </div>
            </div>
            <div className="project">
                <img src={img3} alt="portfolio"/>
                <div className="project-btns">
                    <div className="tech">
                        <SiCss3 className={classNames("icon","css")}/>
                        <SiReact className={classNames('icon','react')}/>
                    </div>
                    <p>The site you are curentl browsing</p>
                    <button
                    onClick={()=>window.open("https://github.com/stefanghadjiew/Portfolio","_blank")} 
                    network="github" 
                    className="project-btn">
                    <AiFillGithub/>
                    Github
                    </button>
                </div>
            </div>
            <div className="project">
                <img src={img4} alt=""/>
            </div>
        </div>
    )
}


export default Projects;