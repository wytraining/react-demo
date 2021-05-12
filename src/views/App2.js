import logo from '../logo.svg';
import '../App.css';
import Button from 'antd/lib/button'
import React from 'react';
import TopBar from './TopBar'

const titleStyle = {
    color: 'green',
    fontSize: 30
};

function Title(props) {
    return (
        <div style={titleStyle}>
            <TopBar/>
            <p>{props.children}</p>
            <span>我是title--{props.name}</span>
            <Button onClick={props.onClick}>改变name</Button>
        </div>
    )
}

class Title2 extends React.Component {
    render() {
        return (
            <div style={
                {color: 'red', fontSize: '26px'}
            }>
                <span>我是title2--{this.props.name}</span>
                <Button onClick={this.props.onClick}>改变name</Button>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'zs'
        }
    }

    changeName() {
        this.setState({name: 'zs333'});
    }

    render() {
        return (
            <div className="App">
                <Title
                    name={this.state.name}
                    onClick={() => this.changeName()}
                >
                    <h1>slot -> props.children</h1>
                </Title>
                <Title2
                    name={this.state.name}
                    onClick={() => this.changeName()}
                />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Button onClick={() => alert("222")}>test</Button>
                    <p>{this.state.name}</p>
                </header>
            </div>
        );
    }
}

export default App;

