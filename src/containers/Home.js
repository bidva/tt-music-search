import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {updateTerm, artistsFetch} from '../actions/index'
import SearchForm from '../components/Home/SearchForm'
import ArtistList from '../components/Home/ArtistList'
import Message from '../components/Message/Message'

const Home = ({term, message, artists, actions }) =>(
  <div>
    {(message&&message!=="")?<Message message={message}/>:null}
    <SearchForm 
      updateTerm={actions.updateTerm} 
      artistsFetch={actions.artistsFetch}
      searchTerm={term}
    />
    <hr/>
    <ArtistList
      artists={artists}
      updateCurrentArtist={actions.updateCurrentArtist}
    />
  </div>
)

const mapStateToProps = state =>({
  artists:state.musicSearch.artists,
  term: state.musicSearch.term,
  message: state.musicSearch.message
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({updateTerm, artistsFetch}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)