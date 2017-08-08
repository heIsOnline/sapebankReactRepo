import React,{Component} from 'react';
import { Col,Row } from 'react-grid-system';
import ChooseAccount  from './choose-account/ChooseAccount';
import AccountDetails  from './account-details/AccountDetails';
import AuthenticateNumber from './authenticate-number/AuthenticateNumber';
import BankingPassword from './banking-password/BankingPassword';
import MemorableInformation from './memorable-information/MemorableInformation';
import ConfirmSharing from './confirm-sharing/ConfirmSharing';
import SelectNumber from './select-number/SelectNumber';

export default class MainComponent extends Component{
		continueBtnHandler(){
		if(this.state.accountTarget === true){
			this.props.renderHandler();
			this.setState ({
				accountTarget: false,
				memorableTarget: true,
				chooseTarget: false,
				bankingTarget: false,
				sharingTarget:false,
				numberTarget: false,
				authenticateTarget: false
			})
		}

		else if(this.state.memorableTarget === true){
			this.setState ({
				accountTarget: false,
				memorableTarget: false,
				chooseTarget: false,
				bankingTarget: true,
				sharingTarget:false,
				numberTarget: false,
				authenticateTarget: false
			})
		}
		else if(this.state.bankingTarget === true){
			this.setState ({
				accountTarget: false,
				memorableTarget: false,
				chooseTarget: true,
				bankingTarget: false,
				sharingTarget:false,
				numberTarget: false,
				authenticateTarget: false
			})
		}	
		else if(this.state.chooseTarget === true){
			this.setState ({
				accountTarget: false,
				memorableTarget: false,
				chooseTarget: false,
				bankingTarget: false,
				sharingTarget: true,
				numberTarget: false,
				authenticateTarget: false
			})
		}
		else if(this.state.sharingTarget === true){
			this.setState ({
				accountTarget: false,
				memorableTarget: false,
				chooseTarget: false,
				bankingTarget: false,
				sharingTarget: false,
				numberTarget: true,
				authenticateTarget: false
			})
		}
		else if(this.state.numberTarget === true){
			this.setState ({
				accountTarget: false,
				memorableTarget: false,
				chooseTarget: false,
				bankingTarget: false,
				sharingTarget: false,
				numberTarget: false,
				authenticateTarget: true
			})
		}
	}	
	backBtnHandler(){
		if(this.state.memorableTarget === true){
			this.setState ({
				accountTarget: true,
				memorableTarget: false,
				chooseTarget: false,
				bankingTarget: false,
				sharingTarget:false,
				numberTarget: false,
				authenticateTarget: false
			})
		} 
		else if(this.state.bankingTarget === true){
			this.setState ({
				accountTarget: false,
				memorableTarget: true,
				chooseTarget: false,
				bankingTarget: false,
				sharingTarget:false,
				numberTarget: false,
				authenticateTarget: false
			})
		} 
		else if(this.state.chooseTarget === true){
			this.setState ({
				accountTarget: false,
				memorableTarget: false,
				chooseTarget: false,
				bankingTarget: true,
				sharingTarget:false,
				numberTarget: false,
				authenticateTarget: false
			})
		}
		else if(this.state.sharingTarget === true){
			this.setState ({
				accountTarget: false,
				memorableTarget: false,
				chooseTarget: true,
				bankingTarget: false,
				sharingTarget:false,
				numberTarget: false,
				authenticateTarget: false
			})
		}
		else if(this.state.numberTarget === true){
			this.setState ({
				accountTarget: false,
				memorableTarget: false,
				chooseTarget: false,
				bankingTarget: false,
				sharingTarget: true,
				numberTarget: false,
				authenticateTarget: false
			})
		}

	}
	constructor(){
		super();
		this.state = {
			accountTarget: true,
			memorableTarget: false,
			chooseTarget: false,
			bankingTarget: false,
			sharingTarget: false,
			numberTarget: false,
			authenticateTarget: false
		}
		this.continueBtnHandler = this.continueBtnHandler.bind(this);
		this.backBtnHandler = this.backBtnHandler.bind(this);
	}
	
	render(){
		 
		return(
			<Col md={8}>
				<Row>
					<Col  offset={{ md:3 }}>
						<AccountDetails data = {this.state} continueBtnClick = {this.continueBtnHandler}/>
					  <MemorableInformation  backBtnClick ={this.backBtnHandler} data = {this.state} continueBtnClick = {this.continueBtnHandler}/>
					  <BankingPassword backBtnClick ={this.backBtnHandler} data = {this.state} continueBtnClick = {this.continueBtnHandler}/>
					  <ChooseAccount backBtnClick ={this.backBtnHandler} data = {this.state} continueBtnClick = {this.continueBtnHandler}/>
						<ConfirmSharing backBtnClick ={this.backBtnHandler} data = {this.state} continueBtnClick = {this.continueBtnHandler}/>
						<SelectNumber backBtnClick ={this.backBtnHandler} data = {this.state} continueBtnClick = {this.continueBtnHandler}/>
						<AuthenticateNumber backBtnClick ={this.backBtnHandler} data = {this.state}/>
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

