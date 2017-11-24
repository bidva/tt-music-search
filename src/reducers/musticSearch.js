import * as types from '../constants/ActionTypes'
import dotProp from 'dot-prop-immutable'

const initialState={
  artists:[],
  term:'',
  currentArtist:{}
}

export default function musticSearch(state = initialState, action){
  switch (action.type) {
    case types.ARISTS_FETCH:
      let artists=action.payload.artists.items
      return dotProp.set(state, 'artists', artists)
    case types.TERM_UPDATE:
      return dotProp.set(state, 'term', action.payload)
    case types.CURRENT_ARTIST_UPDATE:
      return dotProp.set(state, 'currentArtist', action.payload)
    case types.ALBUMS_FETCH:
      return state
    default:
      return state 
  }
}