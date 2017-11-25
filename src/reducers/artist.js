import * as types from '../constants/ActionTypes'
import dotProp from 'dot-prop-immutable'
import * as utils from '../lib/utils'

const initialState={
  currentArtist:{},
  albumList:[]
}

export default function artist(state = initialState, action){
  switch (action.type) {
    case types.ARTIST_FETCH:
      return dotProp.set(state, 'currentArtist', action.payload)
    case types.ALBUMS_FETCH:
      return dotProp.set(state, 'albumList', action.payload.items)
    case types.ALBUM_FETCH:
      return utils.mergeIn(state, ['albumList', { id: action.payload.id } ], action.payload)
    default:
      return state 
  }
}