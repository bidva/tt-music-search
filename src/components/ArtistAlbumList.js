import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchAlbums} from '../reducers/artist'
import AlbumList from './AlbumList'

class ArtistAlbumList extends Component {

  componentWillMount(props) {
    this.props.fetchAlbums(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <span>
          Albums
        </span><br/>
        <input type="text"
          disabled
          value={this.props.match.params.name}
         /><br/>
         <AlbumList/>
      </div>
    );
  };
}

export default connect(
  (state)=>({artistAlbums:state.artistAlbums}),
  {fetchAlbums}
  )(ArtistAlbumList)
