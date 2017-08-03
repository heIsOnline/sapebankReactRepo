import React,{Component} from 'react';

export default class MemorableInformation extends Component{
    render(){
        return(
            <div>
                <p>Please enter your memorable information.</p>

	<form>
		<label for="unshared"></label>
		<input type="checkbox" id="unshared" name="logon"
		value="do-not-share" checked/>
		None of your logon details will be shared<br/>
        <div>
		<p>Enter the indicated characters from your memorable<br>information</p>

		<label for="char1">2nd</label><br/>
		<input list="char1" name="character"/>
		<datalist id="char1">
			<option value="A"/>
			<option value="B"/>
			<option value="C"/>
			<option value="D"/>
		</datalist><br/>

		<label for="char2">3rd</label><br/>
		<input list="char2" name="character"/>
		<datalist id="char2">
			<option value="E"/>
			<option value="F"/>
			<option value="G"/>
			<option value="H"/>
		</datalist><br/>

		<label for="char3">4th</label><br/>
		<input list="char3" name="character"/>
		<datalist id="char3">
			<option value="I"/>
			<option value="J"/>
			<option value="K"/>
			<option value="L"/>
		</datalist>

        </div><br/>
		<input type="submit" name = "" value="Back"/>
		<input type="submit" name = "" value="Continue"/>
		<p>Do you want to <a href="">Cancel</a></p>

	</form>
            </div>
        )    
    }
}