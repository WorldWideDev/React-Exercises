import React, { Component } from 'react';

export default class Link extends Component {
    handleLink(){
        window.location.hash = this.props.name.toLowerCase();
    }
    render(){
        console.log(this.props.history);
        return (
            <h2><a 
                   onClick={()=> this.handleLink()}>{this.props.name}</a></h2>
        )
    }
}
