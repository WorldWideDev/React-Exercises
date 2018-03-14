import React, { Component } from 'react';

export default class User extends Component {
    render() {
        return (
            <h1>Horray for {this.props.match.params.name}</h1>
        )
    }
}
