import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

const termChangeHandler = (val) => store.dispatch({type:'TERM_UPDATE',payload:val})

const render = () =>{
	const state=store.getState()
	ReactDOM.render(<App albums={state.albums} 
		searchTerm={state.searchTerm}
		changeTerm={termChangeHandler}
		/>, document.getElementById('root'));
}

render()

store.subscribe(render)

registerServiceWorker();
