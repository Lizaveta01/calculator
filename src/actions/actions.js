import { ADD_ELEM, EQUAL, CLEAR, DELETE, THEME } from './actionTypes'


export const addElem = text => ({type:ADD_ELEM, text})
export const equal = value => ({type:EQUAL, value})

// export const plus = () => ({type: OPERATION, func: (a, b) => a + b })
// export const minus = () => ({type: OPERATION, func: (a, b) => a - b })
// export const multiply = () => ({type: OPERATION, func: (a, b) => a * b })
// export const divide  = () => ({type: OPERATION, func: (a, b) => a / b })

export const clearAll = () => ({type: CLEAR})
export const deleteElem = () => ({type: DELETE})

export const switchTheme = theme => ({type: THEME, theme})


