import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Column } from 'react-grid-system';
import MainComponent from './components/main/MainComponent.jsx';
import SidebarComponent from './components/sidebar/SidebarComponent.jsx';
import './styles/global.css';
import './styles/reset.css';


class App extends Component{
    render(){
        return(
                <Container>
                    <Row>
                        <column>
                        <MainComponent/>
                        </column>
                    </Row>    
                </Container>
                
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));