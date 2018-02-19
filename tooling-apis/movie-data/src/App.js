import React, { Component } from 'react';
import Movie from './components/Movie/Movie';
import './App.css';

const API_KEY = "2e56d05a";

const HOST = `http://www.omdbapi.com`;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            movie: {}
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        fetch(`${HOST}/?t=${this.state.text}&apikey=${API_KEY}`,{ })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => this.setState({movie: response}));
    }
    render() {
        return (
            <div className="App">
                <h1>Hello</h1>
                <form onSubmit={(e)=> this.handleSubmit(e)}>
                    <input onChange={(e)=>this.setState({text:e.target.value})}
                        type="text" 
                        value={this.state.text} />
                    <button>Search</button>
                </form>
                <Movie movie={this.state.movie} />
            </div>
        );
    }
}

export default App;
