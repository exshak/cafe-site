import classnames from 'classnames'
import React, { useEffect, useState } from 'react'
import NavBar from './navBar'

const Header = () => {
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
  }, [])

  return (
    <header id="header">
      <nav
        className={classnames(
          'navbar navbar-expand-lg navbar-light bg-light fixed-top',
          navbarColor
        )}
      >
        <NavBar
          isCollapsed={navbarCollapse}
          toggleCollapse={toggleNavbarCollapse}
        />
      </nav>
    </header>
  )
}

export default Header
