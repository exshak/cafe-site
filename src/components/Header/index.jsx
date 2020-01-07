import classnames from 'classnames'
import React, { useEffect, useState } from 'react'
import NavBar from './navBar'

const Header = () => {
  const [navbarSize, setNavbarSize] = useState('py-2')
  const [navbarCollapse, setNavbarCollapse] = useState(false)

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse)
  }

  useEffect(() => {
    const updateNavbarSize = () => {
      if (document.documentElement.scrollTop > 99) {
        setNavbarSize('py-0')
      } else if (document.documentElement.scrollTop < 100) {
        setNavbarSize('py-2')
      }
    }

    window.addEventListener('scroll', updateNavbarSize)

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarSize)
    }
  }, [])

  return (
    <header id="header">
      <nav
        className={classnames(
          'navbar navbar-expand-lg navbar-light bg-light fixed-top',
          navbarSize
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
