import React,{Component} from 'react';
import '../../../styles/globalRight.css';


export default class ChooseAccount extends Component{
    render(){
        return(
            <div>
                <p>Please select which account(s) you want to share<br/>
	information about</p>

	<form action="">
	    <p>Enter the indicated characters from your memorable information.</p><br/>
	    
	    <label for="premium"></label>
	    <input type="checkbox" id="premium" name="account" value="Premium"/>
	    Premium 21-94-32 98765432<br/><br/>

	    <label for="classic"></label>
		<input type="checkbox" id="classic" name="account" value="Classic"/>
		Classic 00-89-12 54321098<br/><br/>

		<label for="classic2"></label>
		<input type="checkbox" id="classic2" name="account" value="Classic"/>
		Classic 00-89-12 54321098<br/><br/>

		<input type="submit" name = "" value="Back"/>
		<input type="submit" name = "" value="Continue"/>

		<p>Do you want to <a href="">Cancel</a></p>
	</form>
            </div>
        )    
    }
}