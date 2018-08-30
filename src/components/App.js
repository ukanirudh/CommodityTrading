import React, { Component } from "react";
import TestApp from './testApp.js'
import Trading from '../trading'
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <TestApp />
                <Trading />
            </div>
        );
    }
}

export default App;
