import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  HeaderWrapper,
  LinkWrapper,
  MenuIconDiv,
  FirstlineHeader,
} from '@/components/Header/Header.styled'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  HOME_PAGE_HISTORY_ROUTE,
} from '@/constants'
import * as actions from '@/actions/actions'
class Header extends Component {
  state = {
    menuOpen: false,
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  handleLinkClick() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    const { menuOpen } = this.state
    const {isDisplayVisible} = this.props

    const handleVisible = status => {
      isDisplayVisible(status)
      this.handleLinkClick()
    }

    return (
      <HeaderWrapper>
        <FirstlineHeader>
          <p>Calculator App</p>
          <MenuIconDiv
            onClick={() => this.handleMenuClick()}
            className={menuOpen ? 'active' : ''}>
            <span />
          </MenuIconDiv>
        </FirstlineHeader>
        <LinkWrapper className={menuOpen ? 'active' : ''}>
          <NavLink
            exact
            to={HOME_PAGE_ROUTE}
            onClick={() => handleVisible(true)}>
            Home
          </NavLink>
          <NavLink
            to={SETTINGS_PAGE_ROUTE}
            onClick={() => this.handleLinkClick()}>
            Settings
          </NavLink>
          <NavLink
            className="active-burger"
            to={HOME_PAGE_HISTORY_ROUTE}
            onClick={() => handleVisible(false)}>
            History
          </NavLink>
        </LinkWrapper>
      </HeaderWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => {
  const { isDisplayVisible } = bindActionCreators(
    actions,
    dispatch,
  )

  return {
    isDisplayVisible,
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Header)

Header.propTypes = {
  isDisplayVisible: PropTypes.func,
}
