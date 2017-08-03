import React,{Component} from 'react';
import { Col,Row } from 'react-grid-system';
import styles from '../../../styles/globalLeft.css';

const HeaderComponent = (props) =>(<div></div>);

export default class InformationComponent extends Component{
    render(){
        return(
           <Col offset={{ md: 1 }}>
                  
	<section>
        <h1 className="mainHeading">Sape Bank Gateway</h1>

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
	</section>
  
 			</Col>
        )
    }
}

