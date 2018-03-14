import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import NamesList from './components/NamesList';
export const people = [
    "Jake Sisko",
    "Quark",
    "Gul Dukat",
    "Garak",
    "Major Kira",
    "Commander Sisko",
    "Chief O'Brian",
    "Doctor Bashir",
    "Odo",
    "Nog",
    "Keiko O'Brian",
    "Jadzia Dax",
    "Curzon Dax"
]
class App extends Component {
    render() {
        return (
            <div className="App">
                <SearchBar/>
                <NamesList />
            </div>
        );
    }
}

export default App;
