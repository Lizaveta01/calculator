import { bindActionCreators } from "redux"
import * as actions from "@/actions/actions"
import {store} from '@/store'
const { dispatch } = store
const { deleteElem, clearAll } = bindActionCreators(actions, dispatch)

export const checkValidation = (el, val) => {

  const elem = el.trim()
  const value = val.split(' ').join('')
  const lastSymbol = value.slice(-1)
  const operation = [ '+', '-', '/', '*', '%']
  const operationNoStart = ['+','/', '*', '=', '%', '-']

  // Удаление начального нуля перед операцией
  if(value === '0') {
    deleteElem()
    if(operationNoStart.includes(elem)) {
      return `0${el}`
    } else if (elem === '.') {
      return `0${el}`
    } else if (elem === ')') {
      return '0'
    } else {
      return el
    }
  }

  // Проверка если последний элемент это ошибка
  if(value === 'Error'){
    clearAll()
    deleteElem()
    if(operationNoStart.includes(elem)) {
      return '0'
    } else if (elem === '.') {
      return `0${el}`
    } else {
      return el
    }
  }

  // Проверка если последний элемент это закрвывающаяся скобка
  if(lastSymbol === ')'){
    if (elem.match(/\d+/g)){
      return ''
    } else if(elem === ')'){
      if (isBalanced(value)){
        return el
      } else {
        return ''
      }
    } else if (elem === '(' || elem === '.') {
      return ''
    } else {
      return el
    }
  }

  // Проверка если последний элемент это открывающаяся скобка
  if(lastSymbol === '('){
    if (elem === ')'){
      return ''
    } else {
      return el
    }
  }

  // Проверка если последний элемент это цифра
  if (lastSymbol.match(/\d+/g)) {
   if (elem === '(') {
      return ''
    } else if (elem === '.') {
      const str = value.split('').reverse()
      for (let i = 0; i < str.length; i++) {
        const item = str[i]
        if (item === '.') {
          return ''
        } else if (operation.includes(item)) {
          return el
        } else if (i === str.length - 1) {
          return el
        } else {
          console.log('')
        }
      }
    } else if(elem === ')'){
      if (isBalanced(value)){
        return el
      } else {
        return ''
      }
    } else {
      return el
    }
  }

  // Проверка если последний элемент это точка
  if (lastSymbol === '.'){
    if (elem === '.' || elem === '(' || elem === ')' || elem === '-' || operationNoStart.includes(elem)) {
      return ''
    } else{
      return el
    }
  }

  // Проверка если последний элемент это операция
  if (operation.includes(lastSymbol)){


    if (lastSymbol !== '-' && value.length === 1 && ( elem.match(/\d+/g) || elem === '(' || elem === '.')) {
      return ''
    } else if (elem === '.') {
      return `0${el}`
    } else if (elem === ')') {
      return ''
    } else if (operation.includes(elem)) {
      deleteElem()
      deleteElem()
      return el
    } else {
      return el
    }
  }

}

function isBalanced(string) {
  const str = string.split('')
  const brackets = '()'
  const openBrackets = []
  let canClose = true

  if (str.includes(')')){
    for (let i = 0; i < str.length; ++i) {
        const char = str[i]
        const index = brackets.indexOf(char)
        if (index === -1){
        } else if (index === 1){
            if(!openBrackets.length) {
              canClose = false
            } else {
              openBrackets.pop()
            }
          } else {
            openBrackets.push(char)
        }
    }
    if (!openBrackets.length) canClose = false
  }
  if (str.includes('(')=== false){
    canClose = false
  }
  return canClose
}
