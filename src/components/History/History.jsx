import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  HistoryContainer,
  Wrapper,
} from '@/components/History/History.styled'

class History extends Component {
  render() {
    const { history, historyVisible } = this.props

    const createHistory = arr => {
      const elem = arr.map((item, index) => {
        return <li key={index}>{item}</li>
      })
      return <ul>{elem}</ul>
    }
    const items = createHistory(history)

    return (
      <Wrapper
        className={historyVisible ? '' : 'hidden'}
        data-cy="history-wrapper">
        <p data-cy="history-title">
          {history.length > 0
            ? 'History'
            : 'History is empty'}
        </p>
        <HistoryContainer data-cy="history-items">
          {items}
        </HistoryContainer>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    history: state.history,
    historyVisible: state.historyVisible.history,
  }
}

export default connect(mapStateToProps)(History)

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
  historyVisible: PropTypes.bool,
}
