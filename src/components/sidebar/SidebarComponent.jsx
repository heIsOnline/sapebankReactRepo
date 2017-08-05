import React,{Component} from 'react';
import { Col,Row } from 'react-grid-system';
import InformationComponent from './information/InformationComponent';
import GatewayAccountDetails from './gatewayAccoutDetails/GatewayAccountDetails';
import '../../styles/global.css'
const HeaderComponent = () =>(<div><h1>sapebank</h1><span>The bank of the moment lorem content</span></div>);

export default class SidebarComponent extends Component{
    
    render(){
     
          return(  
             <Col md={4}>    
                <Row>
                    <HeaderComponent/>
                </Row>
                <Row>
                     <InformationComponent/>
                </Row>
             </Col>      
        )
    }
}

