import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'

const Header = ({ siteTitle }) => {
  const [navbarColor, setNavbarColor] = useState('py-2')
  const [navbarCollapse, setNavbarCollapse] = useState(false)

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse)
  }

  useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 99) {
        setNavbarColor('py-0')
      } else if (document.documentElement.scrollTop < 100) {
        setNavbarColor('py-2')
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
        <NavBar
          siteTitle={siteTitle}
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
