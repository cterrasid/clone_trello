import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,*::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
  font-weight: normal;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

ul {
  list-style: none;
}

`
