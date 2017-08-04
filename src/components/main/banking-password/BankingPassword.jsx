import React,{Component} from 'react';
import '../../../styles/globalRight.css';
export default class BankingPassword extends Component{
    render(){
        return(
            <div>
			<h1 className="{mainHeading}">Confirm Your Identity</h1>
                <p>Please enter your internet banking password.</p>

		<form action="">
			<label htmlFor="unshared"></label>
			<input type="checkbox" id="unshared" name="logon"
			value="do-not-share" checked/>
			None of your logon details will be shared<br/><br/>
     
			<label htmlForr="lastname">Password</label><br/><br/> 
			<input type="text" name="uID" placeholder="Password"/><br/><br/>

			<label htmlFor="remember-me"></label>
			<input type="checkbox" id="remember-me" name="remember"
			value="remember-UID"/>
			Remember My User ID<br/><br/>

            <input type="submit" name = "" value="Back"/>
		    <input type="submit" name = "" value="Continue"/>

		    <p className="cancel">Do you want to <a href="">Cancel</a></p>

		</form>
            </div>
        )    
    }
}