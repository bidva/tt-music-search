import reducer from './album'

describe('Album Reducer',()=>{
	test('returns a state object',() =>{
		const result = reducer(undefined,{type:'ANYTHING'})
		expect(result).toBeDefined()
	})

	test('fetch slbums',()=>{

		const startState = {
			albums:[
			]
		}
		const expectedState = {
			albums:[
				{id:1, name:'album 1'},
				{id:2, name:'album 2'},
				{id:3, name:'album 3'}
			]
		}
		const action = {type:'ALBUM_FETCH', payload: expectedState.albums}
		const result = reducer(startState, action: action)

		expect(result).toEqual(expectedState)
	})
})