import React, { Component } from 'react';
import {connect} from 'react-redux';
class NamesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ""
        }
    }
    handleSelectName(nameId){
        console.log(nameId, "was clicked");
    }
    render() {
        console.log(this.props.names);
        return (
            <div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {names: state.names}
}
const NamesListContainer = connect(
    mapStateToProps,
    {}
)(NamesList);
export default NamesListContainer;
