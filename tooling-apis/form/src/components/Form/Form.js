import React, { Component } from 'react';
import './Form.css';
import FormGroup from './../FormGroup/FormGroup';
import NameIsValid, { EmailIsValid } from '../../utils/Validators';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: {}, 
            submitted:false,
            attempted:false,
            // error => {field,[errors]}
            errors: []
        };
    }
    componentWillUpdate(nextProps, nextState){
        const payloadHasChanged = (nextState.payload !== this.state.payload);
        if(nextState.attempted && payloadHasChanged)
            this.validateForm(nextState.payload);
    }
    clear() {
        this.setState({
            submitted:false, 
            attempted:false,
            payload:{}
        });
    }
    handleUpdate(text, target){
        this.setState({
            payload: Object.assign({...this.state.payload}, {[target]:text}),
            submitted: false
        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({attempted: true});
        if(this.validateForm(this.state.payload))
            this.setState({submitted:true});
    }
    validateForm(payload){
        const validName = NameIsValid(payload.name),
            validEmail = EmailIsValid(payload.email);
        let errors = [];
        if(validName === true && validEmail === true)
            this.setState({errors});
        else {
            if(validName!==true)
                errors.push(validName);
            if(validEmail!==true)
                errors.push(validEmail);
            this.setState({errors});
        }
        return !errors.length > 0;
    }
    filterErrorProps(field){
        const errs = this.state.errors.filter(e => e.field===field);
        return errs.length > 0 ? errs[0].errors : [];
    }
    render() {
        const form = (
            <form className="form">
                <FormGroup type="text" 
                    display="Name" 
                    name="name"
                    errors={this.filterErrorProps("name")}
                    submitted={this.state.submitted}
                    onUpdate={(text, target)=>this.handleUpdate(text, target)} /> 
                <FormGroup type="text" 
                    display="Email" 
                    name="email"
                    errors={this.filterErrorProps("email")}
                    submitted={this.state.submitted}
                    onUpdate={(text, target)=>this.handleUpdate(text, target)} /> 
                <button disabled={this.state.errors.length > 0}
                    onClick={(e)=>this.handleSubmit(e)}>Submit</button>
            </form>
        );
        const success = (
            <div className="success">
                <h1>Thank you for submitting {this.state.payload.name}</h1>
                <button onClick={()=>this.clear()}>Go Back</button>
            </div>
        );
        return (
            <div>
                {this.state.submitted ? success : form}
            </div>
        )
    }
}
export default Form;
