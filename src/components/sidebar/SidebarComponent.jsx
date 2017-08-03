import React,{Component} from 'react';
import { Column,Row } from 'react-grid-system';
import InformationComponent from './information/InformationComponent';

const HeaderComponent = () =>(<div>abc</div>);

export default class SidebarComponent extends Component{
    render(){
        return(
            <Column md = {4} lg = {4}>            
                <Row>
                    <HeaderComponent/>
                </Row>
                <Row>
                    <InformationComponent/>
                </Row>
            </Column>    
           
        )
    }
}

