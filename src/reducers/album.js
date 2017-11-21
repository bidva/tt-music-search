const initState= {
	albums:[
		{id:1, name:'album 1'},
		{id:2, name:'album 2'},
		{id:3, name:'album 3'}
	],
	searchTerm:''
}
const TERM_UPDATE = 'TERM_UPDATE'
const ALBUM_FETCH = 'ALBUM_FETCH'

export const updateTerm = (val) => ({type:TERM_UPDATE,payload:val})
export const albumFetch = (val) => ({type:ALBUM_FETCH,payload:val})


export default (state = initState, action) =>{
	switch(action.type){
		case ALBUM_FETCH:
			return {...state, albums: state.albums.concat(action.payload)}
		case TERM_UPDATE:
			return {...state, searchTerm: action.payload}
		default:
			return state
	}
}