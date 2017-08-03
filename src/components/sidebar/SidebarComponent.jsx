import React,{Component} from 'react';
import { Col,Row } from 'react-grid-system';
import InformationComponent from './information/InformationComponent';
import '../../styles/global.css'
const HeaderComponent = () =>(<div>header component</div>);

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

