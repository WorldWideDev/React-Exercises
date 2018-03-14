import React, {Component} from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Home from '../Home/Home';
import Mine from '../Mine/Mine';
import Buy from '../Buy/Buy';
import Sell from '../Sell/Sell';
import Ledger from '../Ledger/Ledger';

export default class Nav extends Component {
    handleSubmit(coins){
        console.log(`accuired ${coins} coins, in Nav`);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/mine">Mine Coins</Link></li>
                        <li><Link to="/buy">Buy Coins</Link></li>
                        <li><Link to="/sell">Sell Coins</Link></li>
                        <li><Link to="/browse">Browse Ledger</Link></li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/buy" component={Buy} onHandleSubmit={(coins)=>this.handleSubmit(coins)} />
                    <Route path="/sell" component={Sell} />
                    <Route path="/browse" component={Ledger} />
                    
                </div>
            </BrowserRouter>
        )
    }
}
