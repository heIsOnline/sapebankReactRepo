import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import './styles/reset.css';

class App extends Component{
    render(){
        return(
                <Container>
                    <Row>
                        <Column md = {4} lg = {4}>
                            <SidebarComponent/>
                        </Column>
                        <Column md = {8} lg = {8}>
                            <MainComponent/>
                        </Column>
                    </Row>    
                </Container>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));