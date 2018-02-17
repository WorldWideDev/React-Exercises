import React, { Component } from "react";

const projectOptions = [
    "Personal",
    "Work",
    "System"
];
const initialPayload = { 
    project: projectOptions[0],
    description: "",
    minutes: 5
}

export default class LogForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: {...initialPayload}
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onHandleSubmit(this.state.payload);
        this.setState({payload:{...initialPayload}});
    }
    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group">
                        <label htmlFor="projects">Project</label>
                        <select onChange={(event) => 
                                    this.setState({payload: Object.assign(this.state.payload,{project:event.target.value})})
                                } 
                                value={this.state.payload.project}
                                className="form-control" name="projects">
                            {projectOptions.map((opt, i) => 
                                <option key={i} value={opt}>{opt}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea 
                            className="form-control" 
                            onChange={(event) => 
                                    this.setState({payload: Object.assign(this.state.payload,{description: event.target.value})}
                            )} 
                            value={this.state.payload.description}
                            name="description"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Minutes</label>
                        <input 
                            className="form-control" 
                            onChange={(event) => 
                                    this.setState({payload: Object.assign(this.state.payload,{minutes: event.target.value})}
                            )} 
                            value={this.state.payload.minutes}
                            type="number" name="duration" />
                    </div>
                    <button className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}
