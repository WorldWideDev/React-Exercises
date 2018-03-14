import React, {Component} from 'react';
import ShintoForm from '../ShintoForm/ShintoForm';

export default class Buy extends Component {
    handleSubmit(coins){
        this.props.route.onHandleSubmit(coins);
    }
    render() {
        return (
            <div className="buy">
                <p>
                    Current ShintoCoin Value: VALUE
                    Number of ShintoCoins Owned: COINS
                    Sell Stuff
                </p>
                <ShintoForm type="Buy" onHandleSubmit={(coins)=>this.handleSubmit(coins)} />
            </div>
        )
    }
}
