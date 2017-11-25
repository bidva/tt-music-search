import * as types from '../constants/ActionTypes'
import dotProp from 'dot-prop-immutable'

const initialState={
  artists:[],
  term:'',
  message:''
}

export default function musticSearch(state = initialState, action){
  if (action.error) {
    let mes=JSON.parse(action.payload.responseText).error.message
    return dotProp.set(state, 'message', mes)
  }
  dotProp.set(state, 'message', '')
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