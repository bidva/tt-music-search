import React from 'react'
import { render } from 'react-dom'
import promiseMiddleware from 'redux-promise'
import Thunk from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Switch} from 'react-router-dom'
import history from './lib/history'
import rootReducer from './reducers'
import Home from './containers/Home'
import Albums from './containers/Albums'
import Header from './components/Header/Header'
import Token from './components/Token/Token'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware, Thunk))

render(
  <Provider store={store}>
    <Router  history={history}>
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/artists/:id/albums" component={Albums}/>
        <Route path="/token" component={Token}/>
      </Switch>
      </div>
      </MuiThemeProvider>
      </div>
    </Router>
  </Provider>, 
document.getElementById('root'));