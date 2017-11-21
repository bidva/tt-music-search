const initState= {
	albums:[]
}
export default (state = initState, action) =>{
	switch(action.type){
		case 'ALBUM_FETCH':
			return {...state, albums: state.albums.concat(action.payload)}
		default:
			return state
	}
}