import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const chapters = createReducer({}, {
  [types.CHAPTERS](state, action) {
    let newState = {}
    action.chapters.forEach( (chapter) => {
      let id = chapter.chapter_number
      newState[id] = Object.assign({}, chapter, { id })
    })
    return newState
  },
})
