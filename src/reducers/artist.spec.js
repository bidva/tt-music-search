import reducer from './artist'

describe('Artist Reducer',()=>{
	test('returns a state object',() =>{
		const result = reducer(undefined,{type:'ANYTHING'})
		expect(result).toBeDefined()
	})

	test('fetch artists',()=>{

		const startState = {
			artists:[
			]
		}
		const expectedState = {
			artists:[
				{id:1, name:'Michael Jackson'},
				{id:2, name:'Whitney Houston'},
				{id:3, name:'Taylor Swift'}
			]
		}
		const action = {type:'ARRISTS_FETCH', payload: expectedState.artists}
		const result = reducer(startState, action: action)

		expect(result).toEqual(expectedState)
	})
})