import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import { connect }  from 'react-redux'

import { Wrapper } from '@/components/Display/Display.styled'

class Display extends Component {
  render() {
    const { value } = this.props
    return (
      <Wrapper>
        <p>{value}</p>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    value: state.value,
  }
}

export default connect(mapStateToProps)(Display)

Display.propTypes = {
  value: PropTypes.string,
}
