import React, { Component } from 'react';
import './Log.css';

const minutesReducer = (a,c) => (a + c); 

function minutesToTimeString(minutes) {
    let h = Math.floor(minutes / 60);
    let m = minutes % 60;
    m = m < 10 ? '0' + m : m;
    return `${h}:${m}`;
}
export default class Log extends Component {
    render(props) {
        const logs = this.props.logs
            .sort((a,b) => b.minutes - a.minutes)
            .map((log, i) => 
                <p key={i}>{minutesToTimeString(log.minutes)} <span>{log.description}</span></p>
            )
        const pLogs = [...this.props.logs];
        let minutes = (this.props.logs.length > 1) 
            ? Object.keys(pLogs).map(key => parseInt(pLogs[key].minutes, 10)).reduce(minutesReducer)
            : parseInt(pLogs[0].minutes, 10);
        minutes = minutesToTimeString(minutes);
        return (
            <div className="log">
                <h1>{this.props.project}</h1>
                <h3>{minutes}</h3>
                <hr />
                <div>
                    {logs}
                </div>
            </div>
        )
    }

}
