import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const chapters = createReducer({}, {
  [types.CHAPTERS](state, action) {
    return action.chapters.map(chapter => ({
      key: chapter.chapter_name_en, ...chapter
    }));
  },
})
