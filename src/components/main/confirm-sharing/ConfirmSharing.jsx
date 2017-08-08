import React,{Component} from 'react';

export default class ConfirmSharing extends Component{
    render(){
		if(!this.props.data.sharingTarget){
			return null;
		}
        return(
            <div>
			<h1 className="mainHeading">Confirm Sharing</h1>
                <p className="marginTop">Please confirm that you are about to share the following<br/>
	information with FinAssist:</p>

	<form>
	    <p className="marginTop">Account<br/><br/>
	    Premium 21-94-32 98765432</p>
	    
	    <p className="marginTop">Validity: 90 Days<br/><br/>
	    Summary of your standing order and direct debits</p>

		<input type="button" name = "" value="Back" className="backBtn" onClick = {this.props.backBtnClick}/>
		<input type="button" name = "" value="Continue" className="continueBtn" onClick = {this.props.continueBtnClick}/>

		<p className="cancel">Do you want to <a href="">Cancel</a></p>
	</form>
            </div>
        )    
    }
}