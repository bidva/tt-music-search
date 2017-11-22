import {getArtists} from '../lib/spotifyServices'
import {getAlbums} from '../lib/spotifyServices'
import {getAlbum} from '../lib/spotifyServices'


const initState= {
	artists:[],
	searchTerm:'',
	artistAlbums:[],
	selectedAlbum:{}
}
const TERM_UPDATE = 'TERM_UPDATE'
const ARISTS_FETCH = 'ARISTS_FETCH'
const ALBUMS_FETCH = 'ALBUMS_FETCH'
const ALBUM_FETCH = 'ALBUM_FETCH'

export const updateTerm = (val) => ({type:TERM_UPDATE,payload:val})
export const artistsFetch = (val) => ({type:ARISTS_FETCH,payload:val})
export const albumsFetch = (val) => ({type:ALBUMS_FETCH,payload:val})
export const albumFetch = (val) => ({type:ALBUM_FETCH,payload:val})

export const fetchArtists = (term) =>{
	return (dispatch)=> {
		getArtists(term).then(res=>
			dispatch(artistsFetch(res.artists.items)))
	}
}

export const fetchAlbums = (clientId) =>{
	return (dispatch)=> {
		getAlbums(clientId).then(res=>
			dispatch(albumsFetch(res.items)))
	}
}

export const fetchAlbum = (clientId) =>{
	return (dispatch)=> {
		getAlbum(clientId).then(res=>console.log(res)||
			dispatch(albumFetch(res)))
	}
}


export default (state = initState, action) =>{
	switch(action.type){
		case ARISTS_FETCH:
			return {...state, artists: action.payload}
		case ALBUMS_FETCH:
			return {...state, artistAlbums: action.payload}
		case TERM_UPDATE:
			return {...state, searchTerm: action.payload}
		case ALBUM_FETCH:
			return {...state, selectedAlbum: action.payload}
		default:
			return state
	}
}