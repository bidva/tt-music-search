import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {updateTerm, artistsFetch} from '../actions/index'
import SearchForm from '../components/Home/SearchForm'
import ArtistList from '../components/Home/ArtistList'

const Home = ({term, artists, actions }) =>(
  <div>
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

const mapStateToProps = state => ({
  artists:state.musticSearch.artists,
  term: state.musticSearch.term
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({updateTerm, artistsFetch}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)