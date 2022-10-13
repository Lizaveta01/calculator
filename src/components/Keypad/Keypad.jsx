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

    const renderKeys = arr => {
      const items = arr.map(item => {
        if (item.view === '=') {
          return (
            <KeyItem
              key={item.view}
              onClick={() => equal(getResult(value))}>
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
