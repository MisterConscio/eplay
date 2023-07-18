import { createGlobalStyle } from 'styled-components'

export const colors = {
  grey: '#333',
  black: '#111',
  white: '#eee',
  green: '#10AC84',
  lightgrey: '#A3A3A3'
}

export const GlobalCss = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    list-style: none;
  }

  img {
    display: block;
  }

  body {
    font-family: Roboto, sans-serif;
    background-color: ${colors.black};
    color: ${colors.white};
  }

  .container {
    max-width: 1024px;
    margin-inline: auto;
  }
`
