import classnames from 'classnames'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { GiCoffeeMug } from 'react-icons/gi'
import { NavBar } from './NavBar'

const Header = ({ siteTitle }) => {
  const [navbarColor, setNavbarColor] = useState('py-3')
  const [navbarCollapse, setNavbarCollapse] = useState(false)

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse)
  }

  useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 99) {
        setNavbarColor('py-2')
      } else if (document.documentElement.scrollTop < 100) {
        setNavbarColor('py-3')
      }
    }

    window.addEventListener('scroll', updateNavbarColor)

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor)
    }
  })

  return (
    <header id="header">
      <nav
        className={classnames(
          'navbar navbar-expand-lg navbar-light bg-light fixed-top',
          navbarColor
        )}
      >
        <Link to="/" className="navbar-brand font-italic">
          <GiCoffeeMug /> {siteTitle}
        </Link>
        <NavBar
          isCollapsed={navbarCollapse}
          toggleCollapse={toggleNavbarCollapse}
        />
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
