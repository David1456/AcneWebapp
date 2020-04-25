import React from "react"
class Subscribe extends React.Component{
    state={
        email:"",
        subscribed:false
    }
    submitted=(e)=>{
        let email=this.state.email;
       
        email=e.currentTarget.value;
       
        this.setState({email:email})
        
        
    }

    subscribedby=()=>{
        let subscribed=this.state.subscribed;
        if(this.state.email!=="")
        {
            subscribed=true
            this.setState({subscribed:subscribed})
        

        }

        if(subscribed===true)
        {
            alert("Thanks for your subscription")
        }
        else{
            alert("Please enter your email")
        }
       
        
    }
    
    render(){
        
        return(<div className="subscribe">
            <h2>Subscribe To Our Newsletter </h2>
            <div className="subscribe1">
                
            <input type="email" placeholder="Enter Email" value={this.state.email} onChange={this.submitted}/>
            <button onClick={this.subscribedby}>Subscribe</button>
            </div>
            
        </div>)
    }
}

export default Subscribe