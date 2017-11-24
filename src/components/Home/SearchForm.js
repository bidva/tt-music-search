import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(evt) {
    const val = evt.target.value
    this.props.updateTerm(val)
    if (val) {
      this.props.artistsFetch(val)
    }
  }
  render() {
    return (
      <form className="Search-Form">
        <span>
          Search Artists
        </span>
        <br/>
        <input type="text"
          onChange={this.handleInputChange}
          value={this.props.searchTerm}
        />
      </form>
    );
  }
}

export default SearchForm