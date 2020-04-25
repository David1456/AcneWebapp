import React from "react"
import Navbar from "../Navbar/Navbar"
import Subscribe from "../Subscribe/Subscribe"
import Footer1 from "../Footnote/footnote"

const About=()=>{
    return(<div>

       
       <Navbar/>
     
      <div className="aboutsub">
      <Subscribe/>
      </div>


      <div className="contents">    
      <div>
            <h1>About Us</h1>
          <p>We started Acne in 2020 to make it easy to access information from anywhere and collaborate with anyone. While that vision still lies at the core of our business, it has transformed into our mission to power how the world works together. Today, we're proud to call 97,000 companies and 68% of the Fortune 500 our customers — but we're just getting started. As work continues to evolve, we stay focused on delivering innovation to organizations across the globe and blowing our customers' minds every day.</p>
          <p className="sndpara">Aliquam eget pharetra diam. Nulla placerat lorem at turpis tempor, vel ultrices dui tincidunt. Proin quis egestas lorem. Mauris vehicula lectus odio, sit amet dictum justo feugiat a. Praesent id dictum lacus. Sed ullamcorper id erat ut dictum. Fusce porttitor lorem sapien, in aliquet sapien convallis et. Donec nec mauris nulla. Curabitur cursus semper odio, et hendrerit ante. Nunc at cursus ante. Maecenas gravida ligula ut efficitur suscipit. Nulla id turpis varius, pretium nunc sed, fermentum sem. Sed lacinia nunc non interdum pellentesque.</p>
        </div>


          <div className="sndbox">
          <h1>What We Do</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum. Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus eget porta in, lacinia et magna</p>
          </div>
         
          
         
        
          
          
          
          </div>
        

    <div className="aboutfooter1">
      <Footer1/>
      </div>
      
    
    
        
</div>

    )
}

export default About