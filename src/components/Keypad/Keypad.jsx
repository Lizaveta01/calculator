import React, { Component }  from 'react'


import { connect } from 'react-redux'
import { data } from '@/components/Keypad/data'
import {
  KeyItem,
  KeysContainer,
  Wrapper,
} from '@/components/Keypad/Keypad.styled'
import { bindActionCreators } from 'redux'
import * as actions from '@/actions/actions'

class Keypad extends Component {
  render() {
    const {
      addElem,
      equal,
      clearAll,
      deleteElem,
      value,
    } = this.props

    const checkElem = elem => {
      let newElem = ''
      const operationNoStart = ['+','.','/','*',')','=','0']
      const operationNoCountin = ['+','-','.','/','*','=']
      const operationNoStartBrackets = [ '.', '/', '*', '+']
      const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

      if ((value.length === 0 && operationNoStart.includes(elem)) ||
        (operationNoCountin.includes(elem) && operationNoCountin.includes(value.slice(-1))) ||
        (elem === ')' && value.slice(-1) === ')') ||
        (elem === '(' && numbers.includes(value.slice(-1))) ||
        (elem === ')' && operationNoCountin.includes(value.slice(-1))) ||
        (elem === ')' && value.includes('(') === false) ||
        (elem === ')' && value === '(') ||
        (elem === '0' && value.slice(-1) === '(') ||
        (elem === '(' && value.slice(-1) === '(') ||
        (elem === '(' && value.slice(-1) === ')') ||
        (elem === '(' && operationNoCountin.includes(value.slice(-1) === false)) ||
        (value.slice(-1) === '(' && operationNoStartBrackets.includes(elem)))
      {
        newElem = ''
      } else {
        newElem = elem
      }
      addElem(newElem)
    }

    const renderKeys = arr => {
      const items = arr.map(item => {
        if (item.view === '=') {
          return (
            <KeyItem
              key={item.view}
              onClick={() => equal()}>
              {item.view}
            </KeyItem>
          )
        } else if (item.view === 'C') {
          return (
            <KeyItem
              key={item.view}
              onClick={() => clearAll()}>
              {item.view}
            </KeyItem>
          )
        } else if (item.view === 'CE') {
          return (
            <KeyItem
              key={item.view}
              onClick={() => deleteElem()}>
              {item.view}
            </KeyItem>
          )
        } else {
          return (
            <KeyItem
              key={item.view}
              onClick={() => checkElem(item.view)}>
              {item.view}
            </KeyItem>
          )
        }
      })
      return <KeysContainer>{items}</KeysContainer>
    }

    const keys = renderKeys(data)

    return <Wrapper>{keys}</Wrapper>
  }
}

const mapStateToProps = state => {
  return {
    value: state.value,
  }
}
const mapDispatchToProps = dispatch => {
  const {
    addElem,
    equal,
    plus,
    minus,
    multiply,
    divide,
    clearAll,
    deleteElem,
  } = bindActionCreators(actions, dispatch)

  return {
    addElem,
    equal,
    plus,
    minus,
    multiply,
    divide,
    clearAll,
    deleteElem,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Keypad)
