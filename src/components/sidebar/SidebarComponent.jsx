import React,{Component} from 'react';
import { Col,Row } from 'react-grid-system';
import InformationComponent from './information/InformationComponent';
import GatewayAccountDetails from './gatewayAccoutDetails/GatewayAccountDetails';
import '../../styles/global.css'
const HeaderComponent = () =>(<div>header component</div>);

export default class SidebarComponent extends Component{
    
    render(){
           function InfoComponent(props) {
                const boolVar = props.boolVar;
                if (boolVar) {
                    return <InformationComponent/>;
                }
                return <GatewayAccountDetails/>;
            }
          return(  
             <Col md={4}>    
                <Row>
                    <HeaderComponent/>
                </Row>
                <Row>
                     <InfoComponent boolVar={true}/>
                </Row>
             </Col>      
        )
    }
}

