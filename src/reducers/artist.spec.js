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
          id:1
        }
      })
    ).toEqual(
      {
        currentArtist:{
          id:1
        },
        albumList:[]
      }
    )
  })

  it('should handle ALBUMS_FETCH', () => {
    expect(
      artist({
          currentArtist:{},
          albumList:[]
        },{
        type:types.ALBUMS_FETCH,
        payload:{items:[{
          id:1
        },{
          id:2
        }        
        ]}
      })
    ).toEqual(
      {
        currentArtist:{},
        albumList:[{
          id:1
        },{
          id:2
        }        
        ]
      }
    )
  })

  it('should handle ALBUM_FETCH', () => {
    expect(
      artist({
          currentArtist:{},
          albumList:[{
            id:1
          }]
        },{
        type:types.ALBUM_FETCH,
        payload:{
          id:1,
          images:[
            {id:1},
            {id:2}
          ]
        }
      })
    ).toEqual(
      {
        currentArtist:{},
        albumList:[{
          id:1,
          images:[
            {id:1},
            {id:2}
          ]
        }]
      }
    )
  })

})