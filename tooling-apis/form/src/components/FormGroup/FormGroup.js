import React, { Component } from 'react';
import './FormGroup.css';

class FormGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }
    handleUpdate(text){
        this.setState({text});
        this.props.onUpdate(text, this.props.name);
    }
    componentWillMount(){
    }
    componentDidMount(){
    }
    componentDidUpdate(prevProps){
        // clear text when form is submitted
        if(this.props.submitted && this.props.submitted !== prevProps.submitted)
            this.setState({text:""});
    }
    render() {
        const errs = this.props.errors.map((err, i) => <span key={i}>{err}</span> );
        return (
            <div className="form-group">
                <label>{this.props.display}</label>            
                <input type={this.props.type} 
                       className={`form-control ${errs.length > 0 ? "invalid" : ""}`}
                       value={this.state.text}
                       name={this.props.name}
                       onChange={(e)=>this.handleUpdate(e.target.value)}/>
                {errs}
            </div>
        )
    }
}
export default FormGroup;
