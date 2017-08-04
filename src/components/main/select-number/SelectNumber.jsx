import React,{Component} from 'react';

export default class SelectNumber extends Component{
    render(){
        return(
            <div>
                <p>You'll to use our automated phone call to confirm</p>

	<form>
	    <p>Please select a number for us to call you on:</p>

        <label htmlFor="phone"></label>
		<input type="checkbox" id="phone" name="contacts" value="phone"/>
	    Home +04 71 2****11<br/><br/>

        <label htmlFor="mobile"></label>
		<input type="checkbox" id="mobile" name="contacts" value="mobile"/>
		Mobile +91 80******93<br/><br/>

        <label htmlFor="mobile2"></label>
		<input type="checkbox" id="mobile2" name="contacts" value="mobile2"/>
		Office +91 98******90<br/><br/>

		<input type="submit" name = "" value="Back"/>
		<input type="submit" name = "" value="Continue"/>

		<p>Do you want to <a href="">Cancel</a></p>
	</form>
            </div>
        )    
    }
}