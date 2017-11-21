import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateTerm} from '../reducers/album'


class SearchForm extends Component {
	constructor(props) {
  	super(props);
  	this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(evt) {
		const val = evt.target.value
		this.props.updateTerm(val)
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

export default connect(
	(state)=>({searchTerm:state.searchTerm}),
	{updateTerm}
	)(SearchForm)