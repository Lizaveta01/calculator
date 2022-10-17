import { bindActionCreators } from "redux"
import * as actions from "@/actions/actions"
import {store} from '@/store'

const { dispatch } = store
const { addHistory } = bindActionCreators(actions, dispatch)


export function getResult(str) {
  const numbers = []
  const symbols = []
  const operationSymbol = ['+', '-', '/', '*', '%', '(', ')' ]
  const operationValue = {
    '+': 1,
    '-': 1,
    '/': 2,
    '*': 2,
    '%': 2,
  }
  let end = false
  const expression = str.split(' ')

  for (let i = 0; i < expression.length; i++) {
    const el = expression[i]

    if (operationSymbol.includes(el)) {
      checkValue(el)
    } else {
      numbers.push(el)
    }

    if (i === expression.length - 1) {
      end = true
      while (symbols.length > 0) {
        countValue(symbols[0])
      }
    }
  }

  const res = numbers.join()

  // if(res === 'NaN'){
  //   return 'Error'
  // } else {
    return res



  function checkValue(el) {
    if (symbols.length === 0) {
      symbols.push(el)
    } else if (
      operationValue[el] <
      operationValue[symbols[symbols.length - 1]]
    ) {
      countValue(el)
    } else if (
      operationValue[el] ===
      operationValue[symbols[symbols.length - 1]]
    ) {
      countValue(el)
    } else if (el === ')') {
      countValue(el)
    } else if (el === 'end') {

    } else {
      symbols.push(el)
    }
  }

  function countValue(el) {
    let value = ''
    const lastNum = +numbers[numbers.length - 1]
    const prevLastNum = +numbers[numbers.length - 2]
    switch (symbols[symbols.length - 1]) {
      case '/':
        addHistory(`${prevLastNum} / ${lastNum}`)
        value = (roundToThree(prevLastNum / lastNum)).toString()
        break
      case '*':
        addHistory(`${prevLastNum} * ${lastNum}`)
        value = (roundToThree(prevLastNum * lastNum)).toString()
        break
      case '+':
        addHistory(`${prevLastNum} + ${lastNum}`)
        value = (roundToThree(prevLastNum + lastNum)).toString()
        break
      case '-':
        addHistory(`${prevLastNum} - ${lastNum}`)
        value = (roundToThree(prevLastNum - lastNum)).toString()
        break
      case '%':
        addHistory(`${prevLastNum} % ${lastNum}`)
        value = (roundToThree(prevLastNum % lastNum)).toString()
        break
      case '(':
        el = 'end'
        value = ''
        break
    }

    if (value) {
      numbers.splice(numbers.length - 2, 2, value)
    }

    symbols.pop()

    if (end === false) {
      checkValue(el)
    }
  }
}

function roundToThree(num) {
  if(num === Infinity || isNaN(num)) {
    return 'Error'
  } else {
    const value = +(Math.round(num + "e+3")  + "e-3")
    return value || 0
  }

}

