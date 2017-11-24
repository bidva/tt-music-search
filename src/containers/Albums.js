import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {artistFetch, albumsFetch} from '../actions/index'
import AlbumsHeader from '../components/Albums/AlbumsHeader'
import AlbumList from '../components/Albums/AlbumList'

class Album extends Component {
  componentWillMount() {
    this.props.actions.artistFetch(this.props.match.params.id)
    this.props.actions.albumsFetch(this.props.match.params.id)
  }
  render(){
    debugger
    return(
      <div>
        <AlbumsHeader currentArtist={this.props.currentArtist}/>
        <hr/>
        <AlbumList albumList={this.props.albumList}/>
      </div>
    )
  }
}

const mapStateToProps = state =>console.log(state)|| ({
  currentArtist:state.artist.currentArtist,
  albumList:state.artist.albumList
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({artistFetch,albumsFetch}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album)