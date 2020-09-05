import React from "react";
import { Link } from "react-router-dom";
import classes  from "./Navbar.module.css"
import { AiFillMail,AiFillPhone} from "react-icons/ai"
import {ImLocation} from "react-icons/im"


const Navbar = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.filler}>
                <p><ImLocation className={classes.reactIcon}/> : Sofia,BG</p>
                <p><AiFillPhone className={classes.reactIcon}/> : +(359)899928238</p>
                <p><AiFillMail  className={classes.reactIcon}/> : stefanghadjiew@abv.bg</p>
            </div> 
            <div className={classes.navbar}>
                <Link className={classes.navlinks} to="/">Home</Link>
                <Link className={classes.navlinks} to="/about">About Me</Link>
                <Link className={classes.navlinks} to="/projects">My Projects</Link>
            </div>
        </div>
    )
}




export default Navbar;