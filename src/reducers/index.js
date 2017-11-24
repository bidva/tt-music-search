import {combineReducers } from 'redux'
import musticSearch from './musticSearch'
import artist from './artist'

const rootReducer = combineReducers({
  musticSearch,
  artist
})

export default rootReducer