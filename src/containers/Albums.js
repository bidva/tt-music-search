import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import AlbumHeader from '../components/Albums/AlbumHeader'

const Album = ({currentArtist}) =>console.log(currentArtist)||(
  <div>
    <AlbumHeader currentArtist={currentArtist}/>
    <hr/>
  </div>
)

Album.propTypes = {
}

const mapStateToProps = state => ({
  currentArtist:state.musticSearch.currentArtist
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album)