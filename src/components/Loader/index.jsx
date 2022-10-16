import React from 'react'

import { lightTheme } from '@/theme'

import { LoaderDiv } from './components'

const LOADER_SIZE = 100

const Loader = () => {
  return (
    <LoaderDiv
      type="Bars"
      color={lightTheme.colors.HOVER_BUTTON_SHADOW}
      height={LOADER_SIZE}
      width={LOADER_SIZE}
    />
  )
}
export default Loader
