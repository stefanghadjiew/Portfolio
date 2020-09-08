import React, { useState }  from "react";
import classes from "./Home.module.css"
import  { SocialIcon } from "react-social-icons"
import { Link } from "react-router-dom"
import { FaHandPeace } from "react-icons/fa"
import { Animated } from "react-animated-css";



const Home = () => {

    const iconStyles = {
        cursor:`pointer`,
        margin:'20px',
    }

    const [state,setState] = useState({
        icon1 : {
                name:"facebook",
                bgColor:"#fff",
                fgColor:"#E74C3C"
        },
        icon2: {
            name:"twitter",
            bgColor:"#fff",
            fgColor:"#E74C3C"
        },
        icon3:{
            name:"instagram",
            bgColor:"#fff",
            fgColor:"#E74C3C"
            
        }
        }
    )

    const handleMouseEnter = (e) => {
        if(e.currentTarget.name === "facebook"){
            setState({...state,icon1:{
                name:"facebook",
                bgColor:"#E74C3C",
                fgColor:"#fff"
            }

            })
        }
        if(e.currentTarget.name === "twitter"){
            setState({...state,icon2:{
                name:"twitter",
                bgColor:"#E74C3C",
                fgColor:"#fff"
            }

            })
        }
        if(e.currentTarget.name === "instagram"){
            setState({...state,icon3:{
                name:"instagram",
                bgColor:"#E74C3C",
                fgColor:"#fff"
            }

            })
        }
        }
       
        const handleMouseLeave = (e) => {
            if(e.currentTarget.name === "facebook"){
                setState({...state,icon1:{
                    name:"facebook",
                    bgColor:"#fff",
                    fgColor:"#E74C3C"
                }
    
                })
            }
            if(e.currentTarget.name === "twitter"){
                setState({...state,icon2:{
                    name:"twitter",
                    bgColor:"#fff",
                    fgColor:"#E74C3C"
                }
    
                })
            }
            if(e.currentTarget.name === "instagram"){
                setState({...state,icon3:{
                    name:"instagram",
                    bgColor:"#fff",
                    fgColor:"#E74C3C"
                }
    
                })
            }
        }

       
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
                <SocialIcon
                name={state.icon1.name}    
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                style={iconStyles} 
                bgColor={state.icon1.bgColor} 
                fgColor={state.icon1.fgColor}
                onClick={()=>window.open("https://www.facebook.com/search/top?q=cheffo0o","_blank")} 
                network="facebook"/>
                <SocialIcon
                name={state.icon2.name}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                style={iconStyles} 
                bgColor={state.icon2.bgColor} 
                fgColor={state.icon2.fgColor}
                onClick={()=>window.open("https://twitter.com/SHadjiew","_blank")} 
                network="twitter"/>
                <SocialIcon
                name={state.icon3.name}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}  
                style={iconStyles}  
                bgColor={state.icon3.bgColor} 
                fgColor={state.icon3.fgColor}
                onClick={()=>window.open("https://www.instagram.com/cheffohadjiev/","_blank")}  
                network="instagram"/>
            </div>
        </div>
    )
}


export default Home;