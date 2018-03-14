import React, { Component } from 'react';
import {connect} from 'react-redux';
import updateNames from '../actions/main';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ""
        }
    }
    handleChange(value){
        this.setState({value});
        this.props.setTerm(value);
    }
    render() {
        return (
            <input 
                type="text" 
                value={this.state.value}
                placeholder="search"
                onChange={(e)=>this.handleChange(e.target.value)}
                />
        )
    }
}
const mapStateToProps = (state) => {
    return { term: state.value }
}
const mapDispatchToProps = (dispatch => {
    return {
        setTerm(term){
            console.log(term);
            dispatch(updateNames(term))
        }
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);
