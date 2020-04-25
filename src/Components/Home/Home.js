import React from "react"

import Navbar from "../Navbar/Navbar"
import Central from './../Centralpic/Centralpic';
import Subscribe from './../Subscribe/Subscribe';
import Footer1 from './../Footnote/footnote';
import Footer from './../Footer/Footer';
const Home=()=>{
    return(<div>
        <Navbar/>
        <Central/>
      <Subscribe/>
      <Footer/>
      <Footer1/>
    </div>)
}

export default Home