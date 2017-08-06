import React,{Component} from 'react';
import { Col,Row } from 'react-grid-system';
import InformationComponent from './information/InformationComponent';
import GatewayAccountDetails from './gatewayAccoutDetails/GatewayAccountDetails';
import '../../styles/global.css'


export default class SidebarComponent extends Component{
    
    render(){
     
          return(  
             <Col md={4} bsClass = "secondary-button-color">    
                <Row>
                    <div>
                        <h1>sapebank</h1><span>The bank of the moment lorem content</span>
                    </div>
                </Row>
                <Row>
                     <InformationComponent/>
                </Row>
             </Col>      
        )
    }
}

