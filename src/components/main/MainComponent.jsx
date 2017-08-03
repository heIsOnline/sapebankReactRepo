import React,{Component} from 'react';
import { Col,Row } from 'react-grid-system';
import ChooseAccount  from './choose-account/ChooseAccount';
var divStyle = {
  border: '2px solid black'
};

var safeStyle = {
  margin: '40px'
};


export default class MainComponent extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<Col md={8} style ={divStyle}>
				<Row>
					<Col  offset={{ md:8 }} style = {safeStyle}>
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

