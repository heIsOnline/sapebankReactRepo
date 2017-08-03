import React,{Component} from 'react';

export default class AccountDetails extends Component{
    render(){
        return(
            <div>
                <p>Please enter your internet banking password.</p>

		<form >
			<label for="unshared"></label>
			<input type="checkbox" id="unshared" name="logon"
			value="do-not-share" checked/>
			None of your logon details will be shared<br/><br/>
     
			<label for="lastname">Password</label><br/><br/> 
			<input type="text" name="uID" placeholder="Password"/><br/><br/>

			<label for="remember-me"></label>
			<input type="checkbox" id="remember-me" name="remember"
			value="remember-UID"/>
			Remember My User ID<br/><br/>

            <input type="submit" name = "" value="Back"/>
		    <input type="submit" name = "" value="Continue"/>

		    <p>Do you want to <a href="">Cancel</a></p>

		</form>

            </div>
        )    
    }
}