import React,{Component} from 'react';
import '../../../styles/globalRight.css';
export default class AuthenticateNumber extends Component{
    render(){
		if(!this.props.data.authenticateTarget){
			return null;
		}
        return(
            <div>
			    <h1 className="mainHeading">Confirm Your Request</h1>
                <h2  className="callingYou">We are calling you now</h2>

	  <div>
	    <p>You will need to enter the four digits when we call<br/><br/>
	  	 Your authentication number is<br/><br/>1234</p>
	  	<p className="authInPreogress">Your authentication is in progress.</p>
	  </div>

	  <p className="accountForm">Please don't refresh the page or close your browser.Once we've confirmed<br/>
	  your identity,we'll tell you what to do next.<br/><br/>
	  If you have a hearing impairment,please answer your phone and wait 15<br/>
	  seconds before pressing 1 or your telephone keypad to confirm you want to<br/> proceed then wait another 15 seconds and enter authentication number<br/>
	  (show more). If you don't want to proceed,please hand up.
	  </p>
	  
	  <p className="cancel">Do you want to <a href="">Cancel</a></p>
            </div>
        )    
    }
}