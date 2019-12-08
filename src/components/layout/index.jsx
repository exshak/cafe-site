import PropTypes from 'prop-types'
import React from 'react'
import { SiteMetadata } from '../Common/SiteMetadata'
import Footer from '../Footer'
import Header from '../Header'
import './bootstrap.min.css'
import './layout.css'

const Layout = ({ children }) => {
  const { title, author } = SiteMetadata()

  return (
    <>
      <Header siteTitle={title} />
      <main id="content">{children}</main>
      <Footer siteTitle={title} siteAuthor={author} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
