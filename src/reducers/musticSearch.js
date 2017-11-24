import * as types from '../constants/ActionTypes'
import dotProp from 'dot-prop-immutable'

const initialState={
  artists:[],
  term:''
}

export default function musticSearch(state = initialState, action){
  switch (action.type) {
    case types.ARTISTS_FETCH:
      let artists=action.payload.artists.items
      return dotProp.set(state, 'artists', artists)
    case types.TERM_UPDATE:
      return dotProp.set(state, 'term', action.payload)
    default:
      return state 
  }
}