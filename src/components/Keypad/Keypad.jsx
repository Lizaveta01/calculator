import React from 'react'
import { data } from '@/components/Keypad/data'
import { KeyItem, KeysContainer, Wrapper } from '@/components/Keypad/Keypad.styled'

export const Keypad = () => {
  const renderKeys = arr => {
    const items = arr.map(item => {
      return (
        <KeyItem key={item.view} >
         {item.view}
        </KeyItem>
      )
    })
    return <KeysContainer>{items}</KeysContainer>
  }

  const keys = renderKeys(data)

  return (
    <Wrapper>
      {keys}
    </Wrapper>
  )
}

