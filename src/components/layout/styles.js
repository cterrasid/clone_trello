import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  tablet: '@media screen and (min-width: 768px)',
  laptop: '@media screen and (min-width: 1024px)',
  desktop: '@media screen and (min-width: 1440px)',
}

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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  height: 100%;
  min-height: ${props => props.minHeight || '60vh'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  padding: 20px;
  width: 100%;

  ${breakpoints.tablet} {
    padding: inherit 40px;
    margin: 0 auto;
  }
`
