import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Arrow,
  DropDownContainer,
  ListItem,
  DropDownList,
  DropDownListContainer,
  DropDownHeader,
} from './SelectElem.styled'

const options = [
  'Light theme',
  'Dark theme',
  'Colored theme',
]

export const SelectElem = ({ checkElem }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = value => () => {
    setSelectedOption(value)
    setIsOpen(false)
    checkElem(value)
  }

  return (
    <DropDownContainer>
      <DropDownHeader
        onClick={toggling}
        data-cy="selected-theme">
        <Arrow />
        {selectedOption || 'Light theme'}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList data-cy="option-theme-container">
            {options.map(option => (
              <ListItem
                onClick={onOptionClicked(option)}
                key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

SelectElem.propTypes = {
  checkElem: PropTypes.func,
}
