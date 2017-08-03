import React,{Component} from 'react';
import { Col,Row } from 'react-grid-system';
import ChooseAccount  from './choose-account/ChooseAccount';


export default class MainComponent extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<Col md={8}>
				<Row>
					<Col  offset={{ md:8 }}>
					  <ChooseAccount/>
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

