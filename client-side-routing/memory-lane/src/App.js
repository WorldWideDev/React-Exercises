import React, { Component } from 'react';
import 'react-router';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Link to="/">Index</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Route exact path="/" component={Index}/>
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/user/:name" component={User} />
                    </div>
                </BrowserRouter>
            </div>

        );
    }
}

export default App;
