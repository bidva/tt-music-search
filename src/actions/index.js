import * as types from '../constants/ActionTypes'
import * as api from './api'

export const updateTerm = val => ({type:types.TERM_UPDATE,payload:val})
export const updateCurrentArtist = val => ({type:types.CURRENT_ARTIST_UPDATE,payload:val})
export const artistsFetch = val => ({type:types.ARISTS_FETCH,payload:api.getArtists(val)})
export const albumsFetch = val => ({type:types.ALBUMS_FETCH,payload:val})
export const albumFetch = val => ({type:types.ALBUM_FETCH,payload:val})
