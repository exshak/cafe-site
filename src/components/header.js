import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      // marginBottom: `1.45rem`,
      position: `fixed`,
      top: 0,
      width: `100%`,
      zIndex: 1,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
        padding: `1rem 1rem`,
      }}
    >
      <h1 style={{ display: `inline`, margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontStyle: `oblique`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ display: `flex`, float: `right` }}>
        <h4 style={{ margin: 20 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Menu
          </Link>
        </h4>
        <h4 style={{ margin: 20 }}>
          <Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            About
          </Link>
        </h4>
        <h4 style={{ margin: 20 }}>
          <Link
            to="/contact"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Contact
          </Link>
        </h4>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Cafe Noir`,
}

export default Header
