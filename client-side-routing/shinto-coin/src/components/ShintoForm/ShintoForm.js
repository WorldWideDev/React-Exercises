import React, {Component} from 'react';

export default class ShintoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: 0
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onHandleSubmit(this.state.coins);
    }
    render() {
        return (
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <input 
                    onChange={(e)=>this.setState({coins:e.target.value})} 
                    type="number" 
                    value={this.state.coins} />
                <input type="submit" value={this.props.type} />
            </form>
        )
    }
}

