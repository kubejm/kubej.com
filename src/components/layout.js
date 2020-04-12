import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(0.75),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        color: 'var(--textNormal)',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <a
          href="https://github.com/kubejm"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </footer>
    </div>
  )
}

Layout.defaultProps = {
  location: {},
  title: '',
  children: null,
}

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Layout
