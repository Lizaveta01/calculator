import React, { Component } from 'react'
import { connect } from 'react-redux'
import Keypad from '@/components/Keypad/Keypad'
import History from '@/components/History/History'
import Display from '@/components/Display/Display'
import {
  ControlViewContainer,
  Wrapper,
} from '@/components/Calculator/Calculator.styled'
import { HistoryContainer } from '../History/History.styled'

class Calculator extends Component {
  render() {
    const { displayVisible, historyVisible } = this.props
    return (
      <Wrapper>
        <ControlViewContainer
          className={displayVisible ? '' : 'hidden'}>
          <Display />
          <Keypad />
        </ControlViewContainer>
        <History />
      </Wrapper>
    )
  }
}
// export default Calculator

const mapStateToProps = state => {
  return {
    displayVisible: state.historyVisible.display,
    historyVisible: state.historyVisible.history,
  }
}

export default connect(mapStateToProps)(Calculator)
