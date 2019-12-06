import PropTypes from 'prop-types'
import React from 'react'
import { useSiteMetadata } from '../Common/useSiteMetadata'
import Footer from '../Footer'
import Header from '../Header'
import './bootstrap.min.css'
import './layout.css'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title} />
      <main id="content">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
