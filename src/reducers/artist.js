const initState= {
	artists:[
		{id:1, name:'Michael Jackson'},
		{id:2, name:'Whitney Houston'},
		{id:3, name:'Taylor Swift'}
	],
	searchTerm:''
}
const TERM_UPDATE = 'TERM_UPDATE'
const ARRISTS_FETCH = 'ARRISTS_FETCH'

export const updateTerm = (val) => ({type:TERM_UPDATE,payload:val})
export const artistsFetch = (val) => ({type:ARRISTS_FETCH,payload:val})


export default (state = initState, action) =>{
	switch(action.type){
		case ARRISTS_FETCH:
			return {...state, artists: state.artists.concat(action.payload)}
		case TERM_UPDATE:
			return {...state, searchTerm: action.payload}
		default:
			return state
	}
}