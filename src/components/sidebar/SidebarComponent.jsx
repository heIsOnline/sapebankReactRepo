import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const HeaderComponent = (props) =>(<div></div>);

export default class SidebarComponent extends Component{
    render(){
        return(
            <Row>
                <HeaderComponent/>
            </Row>
            <Row>
                <InformationComponent/>
            </Row>    
           
        )
    }
}

