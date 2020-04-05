import {
  SET_INFO, SET_USER_CLONE
} from '../actions/action-types'

export const setInfo = (payload) => ({
  type: SET_INFO,
  payload
})


export const setInfoClone = (payload) => ({
type: SET_USER_CLONE,
payload
})
