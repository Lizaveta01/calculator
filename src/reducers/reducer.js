import { lightTheme } from '@/theme'

const INITIAL_STATE = {
  value: '',
  theme: {...lightTheme},
  history: '0',
}

const reducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case "ADD_ELEM":
      return {
        ...state,
        value: state.value + action.text,
      }
    case "EQUAL":
      return {
        ...state,
        value: action.value,

      }
    case "CLEAR":
      return {
        ...state,
        value: '',
      }
    case "DELETE":
      return {
        ...state,
        value: String(state.value).substring(0, state.value.length - 1),
      }
    case "THEME":
      return {
        ...state,
        theme:{...action.theme},
      }
    default:
      return state
  }

}

export default reducer
