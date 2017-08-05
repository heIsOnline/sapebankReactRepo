import React,{Component} from 'react';
import { Col,Row } from 'react-grid-system';
import { BrowserRouter as Router,Link,Route } from 'react-router-dom';
import ChooseAccount  from './choose-account/ChooseAccount';
import AccountDetails  from './account-details/AccountDetails';
import AuthenticateNumber from './authenticate-number/AuthenticateNumber';
import BankingPassword from './banking-password/BankingPassword';
import MemorableInformation from './memorable-information/MemorableInformation';

export default class MainComponent extends Component{
		continueBtnHandler(){
		if(this.state.memorableTarget === true){
			this.setState ({
				memorableTarget: false,
				chooseTarget: false,
				bankingTarget: true,
				sharingTarget:false
			})
		}
		else if(this.state.bankingTarget === true){
			this.setState ({
				memorableTarget: false,
				chooseTarget: true,
				bankingTarget: false,
				sharingTarget:false,
			})

		}	
	}	
	backBtnHandler(){
		if(this.state.bankingTarget === true){
			this.setState ({
				memorableTarget: true,
				chooseTarget: false,
				bankingTarget: false,
				sharingTarget:false,
			})
		}
	}
	constructor(){
		super();
		this.state = {
			memorableTarget: true,
			chooseTarget: false,
			bankingTarget: false,
			sharingTarget:false,
		}
		this.continueBtnHandler = this.continueBtnHandler.bind(this);
		this.backBtnHandler = this.backBtnHandler.bind(this);
	}
	
	render(){
		 
		return(
			<Col md={8}>
				<Row>
					<Col  offset={{ md:3 }}>
					  <MemorableInformation  continueBtnClick = {this.continueBtnHandler} data = {this.state}/>
					  <BankingPassword backBtnClick ={this.backBtnHandler} data = {this.state} continueBtnClick = {this.continueBtnHandler}/>
					  <ChooseAccount data = {this.state}/>
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

