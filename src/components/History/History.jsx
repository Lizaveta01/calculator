import React, { Component } from 'react'
import { connect }  from 'react-redux'
import { HistoryContainer, Wrapper } from '@/components/History/History.styled'

class History extends Component {

  render(){
    const { history } = this.props

    const createHistory = arr => {
      const elem = arr.map((item, index) => {
        return <li key={index}>{item}</li>
      })
      return <ul>{elem}</ul>
    }
    const items = createHistory(history)

    return (
    <Wrapper>
      <p>{history.length > 0 ? 'History' : 'History is empty'}</p>
      <HistoryContainer>
      {items}
      </HistoryContainer>
    </Wrapper>
  )
  }

}

const mapStateToProps = state => {
  return {
    history: state.history,
  }
}

export default connect(mapStateToProps)(History)
