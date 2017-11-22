import React, { Component } from 'react';
import { connect } from 'react-redux'

class ArtistAlbumList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(props) {
  }

  render() {
    return (
      <div>
        {this.props.match.params.id}
      </div>
    );
  };
}

export default connect(
	(state)=>({currentArtist:state.currentArtist})
	)(ArtistAlbumList)
