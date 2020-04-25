import React from "react"
import { Route, Switch } from "react-router-dom"
import About from './../About/About';

import Home from './../Home/Home';
import Services from './../Services/Services';
const Routing=()=>{
    return(<div>
        <Switch>
        <Route path="/services" component={Services}/>
        <Route path="/about" component={About}/>
         <Route path="/home"  component={Home}/>
         <Route path="/" component={Home}/>
        
        </Switch>
        
    </div>)
}

export default Routing