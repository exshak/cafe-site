import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Nav } from './Nav'

// NOTE: rename

const Header = ({ siteTitle }) => {
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top py-3">
        {/* <a className="navbar-brand">{siteTitle}</a> */}
        <Link
          to="/"
          className="navbar-brand"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontStyle: `oblique`,
          }}
        >
          {siteTitle}
        </Link>
        <Nav />
      </nav>
    </header>
  )
}

/* // <header
  //   style={{
  //     background: `white`,
  //     // marginBottom: `1.45rem`,
  //     position: `fixed`,
  //     top: 0,
  //     width: `100%`,
  //     zIndex: 1,
  //   }}
  // >
  //   <div
  //     style={{
  //       // margin: `0 auto`,
  //       // maxWidth: 960,
  //       // padding: `1.45rem 1.0875rem`,
  //       padding: `1rem 1rem`,
  //     }}
  //   >
  //     <h1 style={{ display: `inline`, margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `black`,
  //           textDecoration: `none`,
  //           fontStyle: `oblique`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //     <div style={{ display: `flex`, float: `right` }}>
  //       <h5 style={{ margin: 20 }}>
  //         <Link
  //           to="/"
  //           style={{
  //             color: `black`,
  //             textDecoration: `none`,
  //           }}
  //         >
  //           Home
  //         </Link>
  //       </h5>
  //       <h5 style={{ margin: 20 }}>
  //         <Link
  //           to="/menu"
  //           style={{
  //             color: `black`,
  //             textDecoration: `none`,
  //           }}
  //         >
  //           Menu
  //         </Link>
  //       </h5>
  //       <h5 style={{ margin: 20 }}>
  //         <Link
  //           to="/about"
  //           style={{
  //             color: `black`,
  //             textDecoration: `none`,
  //           }}
  //         >
  //           About
  //         </Link>
  //       </h5>
  //       <h5 style={{ margin: 20 }}>
  //         <Link
  //           to="/contact"
  //           style={{
  //             color: `black`,
  //             textDecoration: `none`,
  //           }}
  //         >
  //           Contact
  //         </Link>
  //       </h5>
  //       <h5 style={{ margin: 20 }}>
  //         <Link
  //           // to="/contact"
  //           className="snipcart-checkout"
  //           style={{
  //             color: `black`,
  //             textDecoration: `none`,
  //           }}
  //         >
  //           Cart
  //         </Link>
  //       </h5>
  //     </div>
  //   </div>
  // </header> */

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
