import React from "react";
import { Switch,Route } from "react-router-dom"
import classes from './Main.module.css'
import Home from "../Home/Home"
import About from "../About/About"


const Main = () =>{
    return(
        <div className={classes.main}>
            <Switch>
                <Route exact path="/home" render={props => <Home {...props}/>}/>
                <Route exact path="/about" render={props => <About {...props}/>}/>
               {/* <Route exact path="/projects" render={props => <Projects {...props}/>}/> */}
                
            </Switch> 
        </div>
    )
   
} 


export default Main;