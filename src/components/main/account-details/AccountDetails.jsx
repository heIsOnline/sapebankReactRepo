import React,{Component} from 'react';
import '../../../styles/globalRight.css';
export default class AccountDetails extends Component{
    render(){
		if(!this.props.data.accountTarget){
			return null;
		}
        return(
            <div>
			    <h1>Confirm Your Identity</h1>
	<p class="registerInfo">
	    To use the service you must be registered for Internet Banking.
		If you are not registerd you can sign up alt
		<a href="">sapebank.com</a>
	</p>	

		<form action="" class="accountForm">
			<label htmlFor="unshared"></label>
			<input type="checkbox" id="unshared" name="logon"
			value="do-not-share" checked/> None of your logon details will be shared
            
			<p>What type of account details do you have?</p>
			<select id="account-details">
			    <option value="lorel">lorel</option>
				<option value="lorel">lorel</option>
				<option value="lorel">lorel</option>
				<option value="lorel">lorel</option>
			</select>
            
			<label htmlFor="lastname" class="bankingId">Internet Banking User ID</label> 
			<input type="text" name="uID" placeholder="User ID"/>

			<label htmlFor="remember-me" class="bankingId"></label>
			<input type="checkbox" id="remember-me" name="remember"
			value="remember-UID"/>Remember My User ID<br/>

            <input type="button" name = "" value="Continue" class="continueBtn" onClick = {this.props.continueBtnClick}/>
            Do you want to <a href="">Cancel</a>

		</form>



            </div>
        )    
    }
}