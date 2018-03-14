import React, { Component } from 'react';
import Link from './Link/Link';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Link name="JavaScript"/>
                <Link name="C/C++"/>
                <Link name="Python"/>
            </div>
        );
    }
}

export default App;
