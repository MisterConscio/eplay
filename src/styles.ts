import { createGlobalStyle } from 'styled-components'

export const colors = {
  grey: '#333',
  black: '#111',
  white: '#eee',
  green: '#10AC84',
  lightgrey: '#A3A3A3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
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

  img, iframe {
    display: block;
    max-width: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
    background-color: ${colors.black};
    color: ${colors.white};
  }

  ul {
    padding-left: 0;
  }

  .container {
    max-width: 1024px;
    margin-inline: auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
