import React from "react"
import { Link } from "react-router-dom"


class Navbar extends React.Component{
    render(){
    return(<div className="navbar">
     <h1>My Web Design</h1>
     <ul>
         <li><Link to="/home" className="link">HOME</Link></li>
         <li><Link to="/about"  className="link">ABOUT</Link></li>
         <li><Link to="/services"  className="link">SERVICES</Link></li>
     </ul>
     
       
     
    </div>)
    }
}

export default Navbar