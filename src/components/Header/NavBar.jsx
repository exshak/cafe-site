import classnames from 'classnames'
import { Link } from 'gatsby'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { SiteLogo } from '../Common/SiteLogo'

export const NavBar = ({ siteTitle, isCollapsed, toggleCollapse }) => (
  <div className="container">
    <Link to="/" className="navbar-brand">
      <SiteLogo logoWidth={150} logoAlt={siteTitle} />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      aria-expanded={isCollapsed}
      onClick={toggleCollapse}
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className={classnames('collapse navbar-collapse', isCollapsed && 'show')}
    >
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link" activeClassName="active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link" activeClassName="active">
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" activeClassName="active">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" activeClassName="active">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link snipcart-checkout"
            activeClassName="active"
          >
            <FaShoppingCart />
          </Link>
        </li>
      </ul>
    </div>
  </div>
)
