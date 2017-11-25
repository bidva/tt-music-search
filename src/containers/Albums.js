import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {artistFetch, albumsFetch, albumFetch} from '../actions/index'
import AlbumsHeader from '../components/Albums/AlbumsHeader'
import AlbumList from '../components/Albums/AlbumList'

class Album extends Component {
  componentWillMount() {
    const {artistFetch, albumsFetch} = this.props.actions
    artistFetch(this.props.match.params.id)
    albumsFetch(this.props.match.params.id)
  }
  render(){
    const {currentArtist, albumList} = this.props
    const {albumFetch} = this.props.actions
    return(
      <div>
        <AlbumsHeader currentArtist={currentArtist}/>
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