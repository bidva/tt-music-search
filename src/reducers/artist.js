import {getArtists} from '../lib/spotifyServices'
const initState= {
	artists:[],
	searchTerm:'',
	currentArtist:''
}
const TERM_UPDATE = 'TERM_UPDATE'
const CURRENT_ARTIST_UPDATE = 'CURRENT_ARTIST_UPDATE'
const ARISTS_FETCH = 'ARISTS_FETCH'

export const updateTerm = (val) => ({type:TERM_UPDATE,payload:val})
export const updateCurrentArtist = (val) => ({type:CURRENT_ARTIST_UPDATE,payload:val})
export const artistsFetch = (val) => ({type:ARISTS_FETCH,payload:val})

export const fetchArtists = (term) =>{
	return (dispatch)=> {
		getArtists(term).then(res=>
			dispatch(artistsFetch(res.artists.items)))
	}
}

export const fetchAlbum = (term) =>{
	return (dispatch)=> {
		getArtists(term).then(res=> dispatch(artistsFetch(res.data.artists.items)))
	}
}


export default (state = initState, action) =>{
	switch(action.type){
		case ARISTS_FETCH:
			return {...state, artists: action.payload}
		case TERM_UPDATE:
			return {...state, searchTerm: action.payload}
		default:
			return state
	}
}