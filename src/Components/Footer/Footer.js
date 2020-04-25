import React from "react"
import html from "./../Images/logo_html.png"
import css from "./../Images/logo_css.png"
import graphic from "./../Images/logo_brush.png"
class Footer extends React.Component{
    render(){
        return(<div className="footer">
            <div className="box">
            <img src={html} alt="html"/>
           <h2>HTML5 Markup</h2>
           <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web.</p>
            </div>
            
           <div className="box">
           <img src={css} alt="css"/>
           <h2>CSS3 Styling</h2>
           <p>CSS stands for Cascading Style Sheets. CSS is a standard style sheet language used for describing the presentation (i.e. the layout and formatting) of the web pages.</p>
           </div>

           <div className="box">
           <img src={graphic} alt="graphic"/>
           <h2>Graphic Design</h2>
           <p>Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration</p>
           </div>
           
        </div>)
    }
}

export default Footer