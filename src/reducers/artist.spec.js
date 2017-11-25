import * as types from '../constants/ActionTypes'
import artist from './artist'

describe('artist reducer', () => {
  it('should handle initial state', () => {
    expect(
      artist(undefined, {})
    ).toEqual(
      {
        currentArtist:{},
        albumList:[]
      }
    )
  })

  it('should handle ARTIST_FETCH', () => {
    expect(
      artist({
          currentArtist:{},
          albumList:[]
        },{
        type:types.ARTIST_FETCH,
        payload:{
          a:1
        }
      })
    ).toEqual(
      {
        currentArtist:{
          a:1
        },
        albumList:[]
      }
    )
  })

})