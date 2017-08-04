import React,{Component} from 'react';
import '../../../styles/globalRight.css';
export default class MemorableInformation extends Component{

    render(){
		 
		return(
            <div>
			    <h1 className="mainHeading">Confirm Your Identity</h1>
                <p className="marginTop">Please enter your memorable information.</p>

	<form>
		<label htmlFor="unshared"></label>
		<input type="checkbox" id="unshared" name="logon"
		value="do-not-share" checked className="marginTop"/>
		None of your logon details will be shared<br/>
        <div>
		<p className="marginTop marginBottom">Enter the indicated characters from your memorable<br/>information</p>
        
		<div className="listItem">
		<label htmlFor="char1" className="dispBlock">2nd</label>
		<input list="char1" name="character" className="items"/>
		<datalist id="char1">
			<option value="A"/>
			<option value="B"/>
			<option value="C"/>
			<option value="D"/>
		</datalist>
        </div>

		<div className="listItem">
		<label htmlFor="char2" className="dispBlock">3rd</label>
		<input list="char2" name="character" className="items"/>
		<datalist id="char2">
			<option value="E"/>
			<option value="F"/>
			<option value="G"/>
			<option value="H"/>
		</datalist>
        </div>
		
		<div className="listItem">
		<label htmlFor="char3" className="dispBlock">4th</label>
		<input list="char3" name="character" className="items"/>
		<datalist id="char3">
			<option value="I"/>
			<option value="J"/>
			<option value="K"/>
			<option value="L"/>
		</datalist>
         </div>
        </div>
		<input type="submit" name = "" value="Back" className="backBtn"/>
		<input type="button" name = "" value="Continue" className="continueBtn"/>
		<p className="cancel">Do you want to <a href="">Cancel</a></p>

	</form>
            </div>
			
        )  
		  
    }
}