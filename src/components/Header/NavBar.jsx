import { Link } from 'gatsby'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

export const NavBar = ({ isCollapsed, toggleCollapse }) => (
  <>
    <button
      className="navbar-toggler"
      type="button"
      aria-expanded={isCollapsed}
      onClick={toggleCollapse}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className={
        isCollapsed
          ? 'collapse navbar-collapse show'
          : 'collapse navbar-collapse'
      }
    >
      <ul className="navbar-nav ml-auto mt-lg-0 ">
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
  </>
)
