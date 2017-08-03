import React,{Component} from 'react';

export default class ConfirmSharing extends Component{
    render(){
        return(
            <div>
                <p class="">Please confirm that you are about to share the following<br/>
	information with FinAssist:</p>

	<form>
	    <p>Account<br/><br/>
	    Premium 21-94-32 98765432</p>
	    
	    <p>Validity: 90 Days<br/><br/>
	    Summary of your standing order and direct debits</p>

		<input type="submit" name = "" value="Back"/>
		<input type="submit" name = "" value="Continue"/>

		<p>Do you want to <a href="">Cancel</a></p>
	</form>
            </div>
        )    
    }
}