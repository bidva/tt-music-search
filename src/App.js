import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArtistContainer from './components/ArtistContainer'
import ArtistAlbumList from './components/ArtistAlbumList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Welcome to search music app using React and redux</h2>
        </div>
        <Router>
          <Switch>
          <Route exact path="/" component={ArtistContainer} />
          <Route path="/artists/:id/:name" component={ArtistAlbumList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App

