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
              {this.props.Albums.map(album=>(
                  <li key={album.id}>
                    <lable>{album.name}</lable>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
