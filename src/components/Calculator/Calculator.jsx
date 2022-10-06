import React from 'react'
import Keypad from '@/components/Keypad/Keypad'
import History from '@/components/History/History'
import Display from '@/components/Display/Display'
import { ControlViewContainer, Wrapper } from '@/components/Calculator/Calculator.styled'

const Calculator = () => {
  return (
    <Wrapper>
      <ControlViewContainer>
        <Display />
        <Keypad />
      </ControlViewContainer>
      <History />
    </Wrapper>
  )
}
export default Calculator
