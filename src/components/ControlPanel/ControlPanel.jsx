import React from 'react'
import { SettingsContainer, Wrapper } from '@/components/ControlPanel/ControlPanel.styled'
import { lightTheme, darkTheme, coloredTheme } from '@/theme'
import { switchTheme } from '@/actions/actions'
import { useDispatch } from 'react-redux'

const ControlPanel = () => {

  const dispatch = useDispatch()

  const checkTheme = theme => {
    switch(theme) {
      case 'light-theme':
        return dispatch(switchTheme(lightTheme))
      case 'dark-theme':
        return dispatch(switchTheme(darkTheme))
      case 'colored-theme':
        return dispatch(switchTheme(coloredTheme))
      default:
        return dispatch(switchTheme(lightTheme))
    }
  }

  return (
    <Wrapper>
      <h1>Settings</h1>
      <SettingsContainer>
        <p>Switch Theme</p>
        <select name="theme" onChange={e => checkTheme(e.target.value)}>
          <option value="light-theme">Light theme</option>
          <option value="dark-theme">Dark theme</option>
          <option value="colored-theme">Colored theme</option>
        </select>
      </SettingsContainer>
      <button> Clear All History</button>
    </Wrapper>
  )
}

export default ControlPanel
