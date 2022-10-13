import React from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderWrapper, LinkWrapper, MenuIconDiv } from '@/components/Header/Header.styled'
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

const Header = () => {
  return (
    <HeaderWrapper>
    <p>Calculator App</p>
    <MenuIconDiv>
        <span />
    </MenuIconDiv>
    <LinkWrapper>
      <NavLink exact to={HOME_PAGE_ROUTE}>Home</NavLink>
      <NavLink to={SETTINGS_PAGE_ROUTE}>Settings</NavLink>
    </LinkWrapper>
    </HeaderWrapper>
  )
}

export default Header
