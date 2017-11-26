import * as types from '../constants/ActionTypes'
import musicSearch from './musicSearch'

describe('musicSeach reducer', () => {
  it('should handle initial state', () => {
    expect(
      musicSearch(undefined, {})
    ).toEqual(
      {
        artists:[],
        term:'',
        message:''
      }
    )
  })

  it('should handle ARTISTS_FETCH', () => {
    expect(
      musicSearch({
        artists:[],
        term:'',
        message:''
      },{
        type:types.ARTISTS_FETCH,
        payload:{artists:{
          items:[{
          id:1
        },{
          id:2
        }]}}
      })
    ).toEqual(
      {
        artists:[{
          id:1
        },{
          id:2
        }],
        term:'',
        message:''
      }
    )
  })

  it('should handle TERM_UPDATE', () => {
    expect(
      musicSearch({
        artists:[],
        term:'',
        message:''
      },{
        type:types.TERM_UPDATE,
        payload:'use redux'
      })
    ).toEqual(
      {
        artists:[],
        term:'use redux',
        message:''
      }
    )
  })

  it('should handle Error message', () => {
    expect(
      musicSearch({
        artists:[],
        term:'',
        message:''
      },{"type":"ARTISTS_FETCH",
      "payload":{
        responseText:'{"error": {"status": 401,"message": "The access token expired"}}'
      },
      "error":true}
      )
    ).toEqual(
      {
        artists:[],
        term:'',
        message:'The access token expired'
      }
    )
  })
})