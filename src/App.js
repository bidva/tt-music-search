import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm'
import ArtistList from './components/ArtistList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Welcome to React with redux for search music</h2>
        </div>
        <div className="Search-App">
          <SearchForm />
          <ArtistList />
        </div>
      </div>
    );
  }
}

export default App

