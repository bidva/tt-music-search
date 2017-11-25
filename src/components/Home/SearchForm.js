import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

const styles = {
  floatingLabelStyle: {
    color: 'gray',
  },
  floatingLabelFocusStyle: {
    color: 'black',
  }
};

const WAIT_INTERVAL = 3000;
const ENTER_KEY = 13;

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
  }
  componentWillMount() {
    this.timer = null;
  }
  handleInputChange(evt) {
    clearTimeout(this.timer);
    const val = evt.target.value
    this.props.updateTerm(val)
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  }
  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
      this.triggerChange();
    }
  }
  triggerChange() {
    const { searchTerm } = this.props;
    this.props.artistsFetch(searchTerm)
  }
  render() {
    return (
        <form className="Search-Form">
          <TextField
            floatingLabelText="Start typing... (search triggers 3 seconds after stop typing)"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            fullWidth={true}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
            value={this.props.searchTerm}
          />
        </form>
    );
  }
}

export default SearchForm