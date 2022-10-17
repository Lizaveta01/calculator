import React from 'react'
import { useDispatch } from 'react-redux'

import { SettingsContainer, Wrapper } from '@/components/ControlPanel/ControlPanel.styled'
import { lightTheme, darkTheme, coloredTheme } from '@/theme'
import { switchTheme, clearAllHistory } from '@/actions/actions'
import { SelectElem } from './SelectElem'

const ControlPanel = () => {

  const dispatch = useDispatch()

  const checkTheme = theme => {
    switch(theme) {
      case 'Light theme':
        return dispatch(switchTheme(lightTheme))
      case 'Dark theme':
        return dispatch(switchTheme(darkTheme))
      case 'Colored theme':
        return dispatch(switchTheme(coloredTheme))
      default:
        return dispatch(switchTheme(lightTheme))
    }
  }

  const clearHistory = () => {
    dispatch(clearAllHistory())
  }

  return (
    <Wrapper >
      <h1>Settings</h1>
      <SettingsContainer data-cy="settings-wrapper">
        <p>Switch Theme</p>
        <SelectElem checkElem={e => checkTheme(e)}/>
      </SettingsContainer>
      <button onClick={clearHistory()} data-cy="history-clean-items"> Clear All History</button>
    </Wrapper>
  )
}

export default ControlPanel
