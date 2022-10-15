import { lightTheme } from '@/theme'

const INITIAL_STATE = {
  value: '0',
  theme: {...lightTheme},
  history: [],
  historyVisible: {display: true, history: false},
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
    case "ADD_HISTORY":

      return {
        ...state,
        history: [action.history,...state.history],
      }
    case "CLEAR":
      return {
        ...state,
        value: '0',
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
    case "CLEAR_HISTORY":
      return {
        ...state,
        value: '0',
        history:[],
      }
      case "ADAPTIVE_HISTORY":
        return {
          ...state,
          historyVisible:{display: action.status, history: !action.status},
        }
    default:
      return state
  }

}

export default reducer
