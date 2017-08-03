import React,{Component} from 'react';

export default class AuthenticateNumber extends Component{
    render(){
        return(
            <div>
                <h2>We are calling you now</h2>

	  <div>
	    <p>You will need to enter the four digits when we call<br/><br/>
	  	 Your authentication number is<br/><br/>1234</p>
	  	<p>Your authentication is in progress.</p>
	  </div>

	  <p>Please don't refresh the page or close your browser.Once we've confirmed<br/>
	  your identity,we'll tell you what to do next.<br/><br/>
	  If you have a hearing impairment,please answer your phone and wait 15<br/>
	  seconds before pressing 1 or your telephone keypad to confirm you want to<br/> proceed then wait another 15 seconds and enter authentication number<br/>
	  (show more). If you don't want to proceed,please hand up.
	  </p>
	  
	  <p>Do you want to <a href="">Cancel</a></p>
            </div>
        )    
    }
}