import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Welcome to React with redux</h2>
        </div>
        <div className="Search-App">
          <form>
            <input type="text" />
          </form>
          <div className="Album-List">
            <ul>
              <li>
                <lable>album 01</lable>
              </li>
              <li>
                <lable>album 02</lable>
              </li>
              <li>
                <lable>album 03</lable>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
