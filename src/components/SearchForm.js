import React, { Component } from 'react';

export default class SearchForm extends Component {
	constructor(props) {
  	super(props);
  	this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(evt) {
		const val = evt.target.value
		this.props.changeTerm(val)
	}
	render() {
		return (
			 <form>
            <input type="text"
            	onChange={this.handleInputChange}
            	value={this.props.searchTerm}
             />
       </form>
		);
	}
}
