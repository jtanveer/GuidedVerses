import { combineReducers } from 'redux'
import * as chaptersReducer from './chapters'

export default combineReducers(Object.assign(chaptersReducer));
