import React, { Component } from 'react';

interface BannerProps {
    message: string;
}
export default class Banner extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
            </div>
        )
    }
}
