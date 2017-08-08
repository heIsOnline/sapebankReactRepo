import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import MainComponent from './components/main/MainComponent.jsx';
import SidebarComponent from './components/sidebar/SidebarComponent.jsx';
import InformationComponent from './components/sidebar/information/InformationComponent';
import GatewayAccountDetails from './components/sidebar/gatewayAccoutDetails/GatewayAccountDetails';
import './styles/global.css';
import './styles/reset.css';


class App extends Component{
    constructor(){
        super();
        this.state = {
            renderFlag: true
        }
        this.renderCheck = this.renderCheck.bind(this);
    }
    renderCheck(){
        this.setState({
            renderFlag: false
        });
    }
    render(){
        return(
                <Container>
                    <Row>
                            <SidebarComponent >
                                <InformationComponent flag = {this.state.renderFlag}/>
                                <GatewayAccountDetails flag = {this.state.renderFlag}/>
                            </SidebarComponent>
                            <MainComponent renderHandler = {this.renderCheck}/>
                        
                    </Row>    
                </Container>
                
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));