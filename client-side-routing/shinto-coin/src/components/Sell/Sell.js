import React, {Component} from 'react';
import ShintoForm from '../ShintoForm/ShintoForm';

export default class Sell extends Component {
    render() {
        return (
            <div className="buy">
                <p>
                    Current ShintoCoin Value: VALUE
                    Number of ShintoCoins Owned: COINS
                    SELL STUFF
                </p>
                <ShintoForm type="Sell" onHandleSubmit={(coins)=>console.log(`SOLD: ${coins} COINS`)} />
            </div>
        )
    }
}
