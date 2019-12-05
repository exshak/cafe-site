import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Nav } from './Nav'

const Header = ({ siteTitle }) => {
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top py-3">
        <Link to="/" className="navbar-brand">
          {siteTitle}
        </Link>
        <Nav />
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
