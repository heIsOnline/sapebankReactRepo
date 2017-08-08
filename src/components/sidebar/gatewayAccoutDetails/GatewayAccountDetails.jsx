import React,{Component} from 'react';
import { Col,Row } from 'react-grid-system';
import '../../../styles/globalLeft.css';
const HeaderComponent = (props) =>(<div></div>);

export default class GatewayAccountDetails extends Component{
	constructor(props){
        super(props);
    }
    render(){
		if(!this.props.flag){
			return null;
		}
        return(
           <Col offset={{ md: 1 }}>
               <div>
                   <h1 className="mainHeading">Sape Bank Gateway</h1>
	<section>
		<p className="shareInfo">You are about to share account information with FinAssist
		Please log in to confirm this.
		</p>

        <h2 className="descriptionHeading">Account Details</h2>
		<ul className="descriptionItem">
			<li>Account Names,sort code and account number.</li>
			<li>Balance and Available funds.</li>
		</ul>

		<h2 className="descriptionHeading">Transactions</h2>
		<ul className="descriptionItem">
			<li>Full statement details of each transactions.</li>
		</ul>

		<h2 className="descriptionHeading">Regular payments and payees</h2>
		<ul className="descriptionItem">
			<li>Summary of your standing order and direct debits</li>
		</ul>

		<p className="validity">Validity: 90 Days</p>
	</section>

               </div>
 		   </Col>
        )
    }
}

