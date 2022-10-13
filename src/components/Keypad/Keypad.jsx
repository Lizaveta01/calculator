import React, { Component } from 'react'
import { getResult } from '@/helpers/getResult'

import { connect } from 'react-redux'
import { data } from '@/components/Keypad/data'
import {
  KeyItem,
  KeysContainer,
  Wrapper,
} from '@/components/Keypad/Keypad.styled'
import { bindActionCreators } from 'redux'
import * as actions from '@/actions/actions'
import { checkValidation } from '@/helpers/checkValidation'

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
      const chekedElem = checkValidation(elem, value)
      addElem(chekedElem)
    }

    const getButtonOperation = type =>{
      switch(type){
        case '=':
          return equal(getResult(value))
        case 'C':
          return clearAll()
        case 'CE':
          return deleteElem()
        default:
          return checkElem(type)
      }
    }

    const renderKeys = arr => {
      const items = arr.map(item => {
        return (
              <KeyItem
                key={item.view}
                onClick={() => getButtonOperation(item.view)}>
                {item.view}
              </KeyItem>
            )
      })
      return items
    }

    const keys = renderKeys(data)

    return <KeysContainer>{keys}</KeysContainer>
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
    clearAll,
    deleteElem,
  } = bindActionCreators(actions, dispatch)

  return {
    addElem,
    equal,
    clearAll,
    deleteElem,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Keypad)
