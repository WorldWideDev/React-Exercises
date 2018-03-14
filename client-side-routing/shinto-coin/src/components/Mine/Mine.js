import React, {Component} from 'react';

// on mine: 
// Increase the value of ShintoCoin by 1
// Store new personal balance of ShintoCoins

export default class Mine extends Component {
    render() {
        return (
            <div className="home">
                <p>
                    Here you can mine ShintoCoins by being the first to solve the algorithm:
                    What is the 7th Fibonacci sequence number?
                </p>
                <button>MINE</button>
            </div>
        )
    }
}
