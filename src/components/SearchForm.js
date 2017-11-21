import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateTerm} from '../reducers/artist'
import {fetchArtists} from '../reducers/artist'


class SearchForm extends Component {
	constructor(props) {
  	super(props);
  	this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(evt) {
		const val = evt.target.value
		this.props.updateTerm(val)
		if (val) {
			this.props.fetchArtists(val)
		}
	}
	render() {
		return (
			 <form classname="Search-Form">
			 <span>
			 	Search Artists
			 </span><br/>
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
	{updateTerm,fetchArtists}
	)(SearchForm)