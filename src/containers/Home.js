import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import SearchForm from '../components/Home/SearchForm'
import ArtistList from '../components/Home/ArtistList'

const Home = ({term, artists, actions }) =>console.log(artists)||(
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

Home.propTypes = {
}

const mapStateToProps = state => ({
  artists:state.musticSearch.artists,
  term: state.musticSearch.term
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)