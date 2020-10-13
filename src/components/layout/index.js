import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from 'components/header'
import { GlobalStyle } from './styles'

export default function Layout({ children }) {
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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          Created with &#10084; by Clarette, 2020
        </footer>
      </div>
    </>
  )
}
