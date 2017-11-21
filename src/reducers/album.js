const initState= {
	albums:[
		{id:1, name:'album 1'},
		{id:2, name:'album 2'},
		{id:3, name:'album 3'}
	]
}
export default (state = initState, action) =>{
	switch(action.type){
		case 'ALBUM_FETCH':
			return {...state, albums: state.albums.concat(action.payload)}
		default:
			return state
	}
}