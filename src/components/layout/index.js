import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from 'components/header'
import { GlobalStyle, Wrapper } from './styles'

export default function Layout({ children, location }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Trello Clone`} />
      <Wrapper>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          Created with &#10084; by Clarette, 2020
        </footer>
      </Wrapper>
    </>
  )
}
