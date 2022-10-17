import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Keypad from '@/components/Keypad/Keypad'
import History from '@/components/History/History'
import Display from '@/components/Display/Display'
import {
  ControlViewContainer,
  Wrapper,
} from '@/components/Calculator/Calculator.styled'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'

class Calculator extends Component {
  render() {
    const { displayVisible } = this.props
    return (
      <Wrapper>
        <ControlViewContainer
          className={displayVisible ? '' : 'hidden'}>
          <ErrorBoundary>
            <Display />
          </ErrorBoundary>
          <ErrorBoundary>
            <Keypad />
          </ErrorBoundary>
        </ControlViewContainer>
        <ErrorBoundary>
          <History />
        </ErrorBoundary>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    displayVisible: state.historyVisible.display,
  }
}

export default connect(mapStateToProps)(Calculator)

Calculator.propTypes = {
  displayVisible: PropTypes.bool,
}
