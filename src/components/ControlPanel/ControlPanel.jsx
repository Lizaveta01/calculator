import React from 'react'
import { SettingsContainer, Wrapper } from '@/components/ControlPanel/ControlPanel.styled'
import { lightTheme, darkTheme, coloredTheme } from '@/theme'
import { switchTheme, clearAllHistory } from '@/actions/actions'
import { useDispatch } from 'react-redux'
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
  return (
    <Wrapper>
      <h1>Settings</h1>
      <SettingsContainer>
        <p>Switch Theme</p>
        <SelectElem checkElem={e => checkTheme(e)}/>
      </SettingsContainer>
      <button onClick={dispatch(clearAllHistory())}> Clear All History</button>
    </Wrapper>
  )
}

export default ControlPanel
