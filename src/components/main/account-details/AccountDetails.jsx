import React,{Component} from 'react';
import '../../../styles/globalRight.css';
export default class AccountDetails extends Component{
    render(){
		if(!this.props.data.accountTarget){
			return null;
		}
        return(
            <div>
			    <h1 className="mainHeading">Confirm Your Identity</h1>
	<p className="marginTop">
	    To use the service you must be registered for Internet Banking.
		If you are not registerd you can sign up alt
		<a href="">sapebank.com</a>
	</p>	

		<form action="" class="accountForm">
			<label htmlFor="unshared"></label>
			<input type="checkbox" id="unshared" name="logon"
			value="do-not-share" checked className="marginTop"/> None of your logon details will be shared
            
			<p className="marginTop marginBottom">What type of account details do you have?</p>
			<div className="dispBlock">
			<select id="account-details" className="accoutnItems">
			    <option value="lorel">lorel</option>
				<option value="lorel">lorel</option>
				<option value="lorel">lorel</option>
				<option value="lorel">lorel</option>
			</select>
            </div>
			<label htmlFor="lastname" className="bankingId">Internet Banking User ID</label> 
			<input type="text" name="uID" placeholder="User ID" className="dispBlock"/>

			<label htmlFor="remember-me" class="bankingId"></label>
			<input type="checkbox" id="remember-me" name="remember"
			value="remember-UID" className="marginTop"/>Remember My User ID<br/>

            <input type="button" name = "" value="Continue" className="continueBtn" onClick = {this.props.continueBtnClick}/>
            Do you want to <a href="">Cancel</a>

		</form>



            </div>
        )    
    }
}