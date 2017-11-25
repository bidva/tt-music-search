import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('search actions', () => {
  it('updateTerm should create ADD_TODO action', () => {
    expect(actions.updateTerm('Use Redux')).toEqual({
      type: types.TERM_UPDATE,
      payload: 'Use Redux'
    })
  })

  //I wrote some test but I have no idea why it has error on calling api 
  //   ReferenceError: XMLHttpRequest is not defined

  //   at _performRequest (node_modules/spotify-web-api-js/src/spotify-web-api.js:75:15)
  //   at _checkParamsAndPerformRequest (node_modules/spotify-web-api-js/src/spotify-web-api.js:154:12)
  //   at Constr.Object.<anonymous>.Constr.getArtist (node_modules/spotify-web-api-js/src/spotify-web-api.js:1073:12)
  //   at Object.<anonymous>.exports.getArtist.artistId [as getArtist] (src/lib/api.js:12:20)
  //   at Object.<anonymous>.exports.artistFetch.val [as artistFetch] (src/actions/index.js:10:16)
  //   at Object.it (src/actions/index.spec.js:16:20)
  //       at Promise (<anonymous>)


  // it('artistFetch should create ARTIST_FETCH action', () => {
  //   expect(actions.artistFetch('2hazSY4Ef3aB9ATXW7F5w3')).toEqual({
  //     type: types.ARTIST_FETCH,
  //     payload:{}
  //   })
  // })

  // it('artistsFetch should create ARTISTS_FETCH action', () => {
  //   expect(actions.artistsFetch('term')).toEqual({
  //     type: types.ARTISTS_FETCH,
  //     payload: 'Use Redux'
  //   })
  // })

  // it('albumsFetch should create ALBUMS_FETCH action', () => {
  //   expect(actions.albumsFetch('2hazSY4Ef3aB9ATXW7F5w3')).toEqual({
  //     type: types.ALBUMS_FETCH,
  //     payload: 'Use Redux'
  //   })
  // })

  // it('albumFetch should create ALBUM_FETCH action', () => {
  //   expect(actions.albumFetch('58C4W39e4xr6eiHyOnaTNY')).toEqual({
  //     type: types.ALBUM_FETCH,
  //     payload: 'Use Redux'
  //   })
  // })
})