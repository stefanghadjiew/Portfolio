import React, { useState } from "react";
import classes from "./Projects.module.css";
import img0 from '../../images/homeImage.jpg';
import img1 from "../../images/wallhaven-nzz9pv.jpg";
import img2 from "../../images/wallhaven-45kmo3.jpg";
import img3 from "../../images/wallhaven-nmx16y.jpg";
import img4 from "../../images/wallhaven-kw1o87.jpg";
import img5 from "../../images/background1.jpg";
import { AiFillGithub } from "react-icons/ai"
import { FaSass } from "react-icons/fa"
import { SiHtml5,SiJavascript,SiMongodb,SiCss3,SiReact,SiMaterialUi } from "react-icons/si"
import { FaNodeJs,FaRegEye } from "react-icons/fa"


const Projects = () => {

    const [state,setState] = useState({
        projects : [
            {
            img : img0,
            alt : "hotels website",
            icons: [
                <SiMaterialUi className={classes.MATERIALicon}/>,
                <SiReact className={classes.REACTicon}/>,
                <FaNodeJs className={classes.NODEicon}/>,
                
            ],
            btnGH : {text:"Github",icon : <AiFillGithub/>},
            btnGHPGS : {text:"Live Preview",icon:<FaRegEye/>},
            info : "hotels website",
            github: "https://github.com/stefanghadjiew/Hotels",
            githubPages : "https://stefanghadjiew.github.io/Hotels/"

            },
            {
            img : img1,
            alt : "e-commerce watches website",
            icons: [
                <SiHtml5 className={classes.HTMLicon}/>,
                <FaSass className={classes.SASSicon}/>,
                <SiJavascript className={classes.JSicon}/>,
                <FaNodeJs className={classes.NODEicon}/>,
                <SiMongodb className={classes.MONGOicon}/>
            ],
            btnGH : {text:"Github",icon : <AiFillGithub/>},
            btnGHPGS : {text:"Live Preview",icon:<FaRegEye/>},
            info : "e-commerce website for watches",
            github: "https://github.com/stefanghadjiew/MyFirstWebSite",
            githubPages : "https://stefanghadjiew.github.io/MyFirstWebSiteStatic/"

            },
            {
            img : img3,
            alt : "portfolio",
            icons: [
                <SiCss3 className={classes.CSSicon}/>,
                <SiReact className={classes.REACTicon}/>
            ],
            btnGH : {text:"Github",icon : <AiFillGithub/>},
            btnGHPGS : {text:"Live Preview",icon:<FaRegEye/>},
            info : "current site",
            github: "https://github.com/stefanghadjiew/Portfolio",

            },
            {
            img : img4,
            alt : "chat-app",
            icons: [
                <SiMaterialUi className={classes.MATERIALicon}/>,
                <SiReact className={classes.REACTicon}/>,
                <SiCss3 className={classes.CSSicon}/>,
                <SiMongodb className={classes.MONGOicon}/>,
                <FaNodeJs className={classes.NODEicon}/>
            ],
            btnGH : {text:"Github",icon : <AiFillGithub/>},
            btnGHPGS : {text:"Live Preview",icon:<FaRegEye/>},
            info : "chatt application",
            github: "https://github.com/stefanghadjiew/chat-app",
            githubPages : "https://stefanghadjiew.github.io/chat-app-static/"

            },
            {
                img:img2,
                alt: "To-watch-app",
                icons : [
                    <SiReact className={classes.REACTicon}/>,
                    <SiCss3 className={classes.CSSicon}/>,
                    <SiMongodb className={classes.MONGOicon}/>,
                    <FaNodeJs className={classes.NODEicon}/>
                ],
                btnGH : {text:"Github",icon : <AiFillGithub/>},
                btnGHPGS : {text:"Live Preview",icon:<FaRegEye/>},
                info : "to-watch-app",
                github: "https://github.com/stefanghadjiew/React-App",
                githubPages : "https://stefanghadjiew.github.io/React-app-static/"
            },
            {
                img:img5,
                alt:'Weather-app',
                icons: [ <SiReact className={classes.REACTicon}/>],
                btnGH : {text:"Github",icon : <AiFillGithub/>},
                btnGHPGS : {text:"Live Preview",icon:<FaRegEye/>},
                info : "weather-app",
                github: "https://github.com/stefanghadjiew/weather-app",
                githubPages : "https://stefanghadjiew.github.io/weather-app/"

            }

        ]
    })
   
    
    const renderProjects = state.projects.map((project,index) => {
        return (
            <div className={classes.project}>
                <img src={project.img} alt={project.alt}/>
                <div className={classes.projectBtns}>
                    <div className={classes.tech}>
                        {project.icons.map((icon,index) => {
                            return (
                                <div className={classes.iconDiv}>
                                   {icon}
                                </div>
                            )
                        })} 
                    </div>
                    <p>{project.info}</p>
                    <button
                    className={classes.projectBtn} 
                    onClick={()=> {
                        window.open(`${project.github}`,"_blank")
                    }}>
                        {project.btnGH.icon}
                        {project.btnGH.text}
                    </button>
                    <button 
                    className={classes.projectBtn}
                    onClick={() => window.open(`${project.githubPages}`,"_blank")} 
                    >
                        {project.btnGHPGS.icon}
                        {project.btnGHPGS.text}
                    </button>
                </div>
            </div>
        )
    })

    

    return (
        <div className={classes.wrapper}>
        {renderProjects}
        </div>
    )
}


export default Projects;