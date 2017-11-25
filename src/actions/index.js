import * as types from '../constants/ActionTypes'
import * as api from '../lib/api'

export const updateTerm = val => ({
  type:types.TERM_UPDATE,
  payload:val
})
export const artistFetch = val => ({
  type:types.ARTIST_FETCH,
  payload:api.getArtist(val)
})
export const artistsFetch = val => ({
  type:types.ARTISTS_FETCH,
  payload:api.getArtists(val)
})
export const albumsFetch = val => ({
  type:types.ALBUMS_FETCH,
  payload:api.getAlbums(val)
})
export const albumFetch = val => ({
  type:types.ALBUM_FETCH,
  payload:api.getAlbum(val)
})
