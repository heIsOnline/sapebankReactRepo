import React,{Component} from 'react';
import styles from '../../../styles/globalRight.css';
export default class MemorableInformation extends Component{

    render(){

        return(
            <div>
			    <h1 className="mainHeading">Confirm Your Identity</h1>
                <p className="marginTop">Please enter your memorable information.</p>

	<form>
		<label for="unshared"></label>
		<input type="checkbox" id="unshared" name="logon"
		value="do-not-share" checked className="marginTop"/>
		None of your logon details will be shared<br/>
        <div>
		<p className="marginTop marginBottom">Enter the indicated characters from your memorable<br/>information</p>

		<label for="char1">2nd</label>
		<input list="char1" name="character"/>
		<datalist id="char1">
			<option value="A"/>
			<option value="B"/>
			<option value="C"/>
			<option value="D"/>
		</datalist>
        
		<label for="char2">3rd</label>
		<input list="char2" name="character"/>
		<datalist id="char2">
			<option value="E"/>
			<option value="F"/>
			<option value="G"/>
			<option value="H"/>
		</datalist>
        
		<label for="char3">4th</label>
		<input list="char3" name="character"/>
		<datalist id="char3">
			<option value="I"/>
			<option value="J"/>
			<option value="K"/>
			<option value="L"/>
		</datalist>

        </div>
		<input type="submit" name = "" value="Back"/>
		<input type="submit" name = "" value="Continue"/>
		<p>Do you want to <a href="">Cancel</a></p>

	</form>
            </div>
			
        )  
		  
    }
}