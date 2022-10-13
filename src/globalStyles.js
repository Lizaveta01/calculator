import { createGlobalStyle } from 'styled-components'

import { lightTheme } from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${lightTheme.font};
  }

  ol li,
  ul li {
    list-style: none;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      min-height: 100vh;
      height: auto;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    &::-webkit-scrollbar {
    background-color: #8070d4;
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-clip: content-box;
    background-color: white;
  }

  }

  #root {
    display: flex;
    background: linear-gradient(to bottom, #c06c84da, #6c5b7bda);
  }
`
