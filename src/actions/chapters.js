import * as types from './types'
import Api from '../lib/api'

export function fetchChapters() {
  return (dispatch, getState) => {
    return Api.get('/chapter_headers').then(resp => {
      dispatch(setChapters({ chapters: resp }))
    }).catch( (ex) => {
      console.log(ex)
    })
  }
}

export function setChapters({ chapters }) {
  return {
    type: types.CHAPTERS,
    chapters,
  }
}
