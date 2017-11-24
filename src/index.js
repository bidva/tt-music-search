import React from 'react'
import { render } from 'react-dom'
import promiseMiddleware from 'redux-promise'
import Thunk from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import reducer from './reducers'
import Home from './containers/Home'
import Albums from './containers/Albums'
import Header from './components/Header/Header'

const store = createStore(reducer, applyMiddleware(promiseMiddleware, Thunk))

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/artists/:id/albums" component={Albums}/>
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>, 
document.getElementById('root'));