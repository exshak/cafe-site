import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

// NOTE:

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  return (
    <header>
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
        <button
          className="navbar-toggler"
          // className={open ? "navbar-toggler" : "navbar-toggler collapsed"}
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02"> */}
        <div
          className={
            open ? "collapse navbar-collapse show" : "collapse navbar-collapse"
          }
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
            <li className="nav-item active">
              {/* <a className="nav-link">
              Home <span className="sr-only"></span>
              </a> */}
              <Link
                to="/"
                className="nav-link"
                style={{
                  color: `black`,
                  textDecoration: `none`,
                }}
              >
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link">Link</a> */}
              <Link
                to="/menu"
                className="nav-link"
                style={{
                  color: `black`,
                  textDecoration: `none`,
                }}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                style={{
                  color: `black`,
                  textDecoration: `none`,
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                style={{
                  color: `black`,
                  textDecoration: `none`,
                }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to=""
                className="nav-link snipcart-checkout"
                style={{
                  color: `black`,
                  textDecoration: `none`,
                }}
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
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
