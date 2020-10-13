import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { globalHistory } from '@reach/router'

export default function Header({ siteTitle }) {
  const path = globalHistory.location.pathname
  const isAuthPage = path === '/' || path === '/login'

  return (
    !isAuthPage && (
      <header>
        <div>
          <h1>{siteTitle}</h1>
        </div>
      </header>
    )
  )
}
