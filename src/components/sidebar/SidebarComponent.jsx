import React,{Component} from 'react';
import { Col,Row } from 'react-grid-system';
import '../../styles/global.css'


export default class SidebarComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
     
          return(  
             <Col md={4} bsClass = "secondary-button-color">    
                <Row>
                    <div>
                    </div>
                </Row>
                <Row>
                     {this.props.children}
                </Row>
             </Col>      
        )
    }
}

