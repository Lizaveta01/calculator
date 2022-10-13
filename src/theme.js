import { css } from 'styled-components'

const font = 'sans-serif'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const lightTheme = {
  above,
  below,
  boxShadows,
  font,
  size,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors:{
    WHITE:'#ffffff',
    BODY_HEADFONT: '#ffffff', // цвет поля/цвет шрифта хедера
    PRIMARY_HEADER_NUMBER: '#4b4b4b', // цвет хедера и цифр
    SECONDARY_NO_ACTIVE_LINK_BORDER: '#bcbcbc',// цвет неактивной линки и обводка у кнопок/границы блоков
    SECONDARY_LIGHT_BUTTOM:'#eeeeee',// цвет кнопок
    HOVER_BUTTON_TEXT: '#4b4b4b',
    HOVER_BUTTON_BACKGROUND: '#ffffff',
    HOVER_BUTTON_SHADOW: '#c6ccd2',
  },
}

export const darkTheme = {
  above,
  below,
  boxShadows,
  font,
  size,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors:{
    WHITE:'#ffffff',
    BODY_HEADFONT: '#4b4b4b',
    PRIMARY_HEADER_NUMBER: '#ffffff',
    SECONDARY_NO_ACTIVE_LINK_BORDER: '#a6a6a6',
    SECONDARY_LIGHT_BUTTOM: '#bcbcbc',
    HOVER_BUTTON_TEXT: '#4b4b4b',
    HOVER_BUTTON_BACKGROUND: '#ffffff',
    HOVER_BUTTON_SHADOW: '#c6ccd2',
  },
}

export const coloredTheme = {
  above,
  below,
  boxShadows,
  font,
  size,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors:{
    WHITE:'#ffffff',
    BODY_HEADFONT: '#f7b1c5',
    PRIMARY_HEADER_NUMBER: '#6c5b7b',
    SECONDARY_NO_ACTIVE_LINK_BORDER: '#e6e6e6',
    SECONDARY_LIGHT_BUTTOM:'#eeeeee',
    HOVER_BUTTON_TEXT: '#4b4b4b',
    HOVER_BUTTON_BACKGROUND: '#ffffff',
    HOVER_BUTTON_SHADOW: '#a46dae',
  },
}
