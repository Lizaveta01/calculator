import { ADD_ELEM, EQUAL, CLEAR, DELETE, THEME, ADD_HISTORY, CLEAR_HISTORY } from './actionTypes'

export const addElem = text => ({type:ADD_ELEM, text})
export const addHistory = history => ({type:ADD_HISTORY, history})
export const equal = value => ({type:EQUAL, value})
export const clearAll = () => ({type: CLEAR})
export const deleteElem = () => ({type: DELETE})
export const clearAllHistory = () => ({type: CLEAR_HISTORY})
export const switchTheme = theme => ({type: THEME, theme})
