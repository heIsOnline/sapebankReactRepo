import React,{Component} from 'react';
import '../../../styles/globalRight.css';

export default class ChooseAccount extends Component{

	render(){
		if(!this.props.data.chooseTarget){
			return null;
		}
        return(
            <div>
			<h1 className="mainHeading">Choose Account</h1>
                <p className="selectAccount">Please select which account(s) you want to share information about</p>

	<form action="">
	    <p>Enter the indicated characters from your memorable information.</p><br/>
	    
	    <label htmlFor="premium"></label>
	    <input type="checkbox" id="premium" name="account" value="Premium"/>
	    Premium 21-94-32 98765432<br/><br/>

	    <label htmlFor="classic"></label>
		<input type="checkbox" id="classic" name="account" value="Classic"/>
		Classic 00-89-12 54321098<br/><br/>

		<label htmlFor="classic2"></label>
		<input type="checkbox" id="classic2" name="account" value="Classic"/>
		Classic 00-89-12 54321098<br/><br/>

		<input type="button" name = "" value="Back" onClick = {this.props.backBtnClick}/>
		<input type="button" name = "" value="Continue" onClick = {this.props.continueBtnClick}/>

		<p className="cancel">Do you want to <a href="">Cancel</a></p>
	</form>

	
            </div>
        )    
    }
}