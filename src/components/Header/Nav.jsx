import { Link } from 'gatsby'
import React, { useState } from 'react'

export const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
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
          open ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
        }
        id="navbarTogglerDemo02"
      >
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link snipcart-checkout">Cart</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
