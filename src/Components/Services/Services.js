import React from "react"

import Navbar from './../Navbar/Navbar';
import Subscribe from './../Subscribe/Subscribe';
import Footer1 from './../Footnote/footnote';
class Services extends React.Component{
    state={
        account:{name:"",email:"",message:""}
    }

    submitHandler=(e)=>{
        e.preventDefault()
       
        const templateId = "template_tzJwt6r0";
        this.sendFeedback(templateId, {message_html: this.state.account.message,
             from_name: this.state.account.name,
             reply_to: this.state.account.email,
             WebDesignTeam: "WebDesignTeam_value"})
alert("Please check your mail")
            
    }
   
     

    sendFeedback (templateId,variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }
    ChangeHandler=(e)=>{
        const account={...this.state.account};
        console.log(e.target.id)
        account[e.target.id]=account[e.currentTarget.value]
        this.setState({account:account})

    }
    render(){
        return(<div className="servicesmain">
               
               <Navbar/>

                <div className="servicesub">
                <Subscribe/>
                </div>
                <h2 className="h2">Services</h2>

                
                  
                    
                <div className="services">
          
                    <div>

                    <h2>Website Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>

                    <p>Pricing: $1,000 - $3,000</p>

                    </div>


                            <div>
                            <h2>Website Maintenance</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>
                            <p>Pricing: $250 per month</p>
                            </div>

                    <div>
                    <h2>Website Hosting</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>
                    <p>Pricing: $25 per month</p>
                    </div>

                    <div className="sideform" id="sideform1">
                        <h2>Get A Quote</h2>
                        <form onSubmit={this.submitHandler}>

                            <div className="formsdetails">
                            <label htmlFor="name">Name</label> <br/>
                            <input 
                            type="text"
                            placeholder="Name" 
                            value={this.state.account.name}
                            id="name" onChange={this.ChangeHandler}
                            />
                            </div>

                            <div className="formsdetails">
                            <label htmlFor="email">Email</label>  <br/>
                            <input 
                            type="email"
                            placeholder="Email Address" 
                            value={this.state.account.email}
                            id="email" onChange={this.ChangeHandler}
                            />
                            </div>

                            <div className="formsdetails">
                            <label htmlFor="message">Message</label> <br/>
                            <input 
                            type="text"
                            placeholder="Message" 
                            value={this.state.account.message}
                            id="message" onChange={this.ChangeHandler}
                            />
                            </div>

                            <button type="submit" className="sendbutton">Send</button>
                            

                        </form>

                    </div>

            


                            


                    </div>

                    <span id="servicefooter">
                            <Footer1/>
                            </span>


                   
        </div>)
    }
}

export default Services