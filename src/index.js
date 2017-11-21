import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state={
	albums:[
		{id:1, name:'album 1'},
		{id:2, name:'album 2'},
		{id:3, name:'album 3'}
	]
}
ReactDOM.render(<App Albums={state.albums}/>, document.getElementById('root'));
registerServiceWorker();
