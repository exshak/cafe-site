import classnames from 'classnames'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import SiteLogo from '../common/siteLogo'
import { SiteMetadata } from '../common/siteMetadata'

const NavBar = ({ isCollapsed, toggleCollapse }) => {
  const { navigation } = SiteMetadata()

  return (
    <div className="container">
      <Link to="/" className="navbar-brand">
        <SiteLogo width={150} />
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
        className={classnames(
          'collapse navbar-collapse',
          isCollapsed && 'show'
        )}
      >
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 font-weight-bold">
          {navigation.map((item, key) => (
            <li key={key} className="nav-item">
              <Link to={item.to} className="nav-link" activeClassName="active">
                {item.text}
              </Link>
            </li>
          ))}
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
}

NavBar.propTypes = {
  isCollapsed: PropTypes.bool,
  toggleCollapse: PropTypes.func,
}

export default NavBar
