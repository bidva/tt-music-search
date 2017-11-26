import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {artistFetch, albumsFetch, albumFetch} from '../actions/index'
import AlbumsHeader from '../components/Albums/AlbumsHeader'
import AlbumList from '../components/Albums/AlbumList'
import singerThumb from '../components/Shared/images/singer-thumb.png'


class Album extends Component {
  componentWillMount() {
    const {artistFetch, albumsFetch} = this.props.actions
    artistFetch(this.props.match.params.id)
    albumsFetch(this.props.match.params.id)
  }
  render(){
    const {currentArtist, albumList} = this.props
    const {albumFetch} = this.props.actions
    let url = (currentArtist&&currentArtist.images&&currentArtist.images[0])?
      currentArtist.images[0].url:
      singerThumb
    return(
      <div>
        <AlbumsHeader 
        url={url}
        name={currentArtist.name}
        />
        <hr/>
        <AlbumList 
          albumList={albumList}
          albumFetch={albumFetch}
        />
      </div>
    )
  }
}

const mapStateToProps = state =>({
  currentArtist:state.artist.currentArtist,
  albumList:state.artist.albumList
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({artistFetch,albumsFetch,albumFetch}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album)