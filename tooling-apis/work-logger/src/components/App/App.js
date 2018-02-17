import React, { Component } from 'react';
import './App.css';
import LogForm from '../LogForm/LogForm';
import Log from '../Log/Log';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: {}
        }
    }
    updateLogs(newLog) {
        let logs = {...this.state.logs};
        logs[newLog.project] = (Object.keys(logs).includes(newLog.project)) 
            ? [...logs[newLog.project], newLog] 
            : [newLog]
        this.setState({logs});
    }
    render() {
        const logs = Object.keys(this.state.logs).map((projectName, i) => 
            <Log project={projectName} key={i} logs={this.state.logs[projectName]} />
        );
        return (
            <div className="App container">
                <h1>Work Logger</h1>
                <LogForm onHandleSubmit={(newLog) => this.updateLogs(newLog)}/>
                <hr />
                {logs}
            </div>
        );
    }
}

export default App;
