import React,{Component} from 'react';
import { Col,Row } from 'react-grid-system';
import { BrowserRouter as Router,Link,Route } from 'react-router-dom';
import ChooseAccount  from './choose-account/ChooseAccount';
import AccountDetails  from './account-details/AccountDetails';
import AuthenticateNumber from './authenticate-number/AuthenticateNumber';
import BankingPassword from './banking-password/BankingPassword';
import MemorableInformation from './memorable-information/MemorableInformation';

export default class MainComponent extends Component{
	constructor(){
		super();
		this.state = {
			memorableTarget: true,
			chooseTarget: false,
			bankingTarget: false,
			sharingTarget:false,

		}
	}
	
	render(){
		 function DisplayComponent(props) {
			    const state=props.state;
                 if (state.memorableTarget) {
                     return  <MemorableInformation/>;
                 }
                 return <BankingPassword/>;
            }
		return(
			<Col md={8}>
				<Row>
					<Col  offset={{ md:3 }}>
					  <DisplayComponent state = {this.state}/>
					  
					</Col>
				</Row>

				<Row>
					<Col  offset={{ md: 2 }}>
		            </Col>  
				</Row>
				
			</Col>
		 
		)
	}
}

