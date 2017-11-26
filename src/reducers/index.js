import {combineReducers } from 'redux'
import musicSearch from './musicSearch'
import artist from './artist'

const rootReducer = combineReducers({
  musicSearch,
  artist
})

export default rootReducer